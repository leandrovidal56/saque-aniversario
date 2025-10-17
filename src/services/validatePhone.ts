import {
  API_CONFIG,
  API_TIMEOUT,
  API_HEADERS,
  RATE_LIMIT_CONFIG,
} from '../config/api';
import { APP_CONSTANTS, MESSAGES } from '../constants';
import { PhoneValidationResponse } from './type';

const phoneValidationCache = new Map<
  string,
  { result: any; timestamp: number }
>();

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = RATE_LIMIT_CONFIG.MAX_RETRIES,
  baseDelay: number = RATE_LIMIT_CONFIG.BASE_DELAY
): Promise<T> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      if (error instanceof Error && error.message.includes('429')) {
        const delay = baseDelay * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw error;
      }
    }
  }
  throw new Error('Máximo de tentativas excedido');
}

export async function validatePhone(phone: string): Promise<{
  isValid: boolean;
  error?: string;
  data?: Partial<PhoneValidationResponse>;
}> {
  try {
    if (!API_CONFIG.PHONE_VALIDATION.API_KEY) {
      throw new Error(MESSAGES.API.API_KEY_MISSING);
    }

    const cleanPhone = phone.replace(/\D/g, '');

    if (cleanPhone.length < APP_CONSTANTS.PHONE.MIN_LENGTH) {
      return {
        isValid: false,
        error: MESSAGES.VALIDATION.PHONE_TOO_SHORT,
      };
    }

    const cached = phoneValidationCache.get(cleanPhone);
    if (
      cached &&
      Date.now() - cached.timestamp < RATE_LIMIT_CONFIG.CACHE_DURATION
    ) {
      return cached.result;
    }

    const url = `${API_CONFIG.PHONE_VALIDATION.BASE_URL}?api_key=${API_CONFIG.PHONE_VALIDATION.API_KEY}&phone=${cleanPhone}&country=${API_CONFIG.PHONE_VALIDATION.COUNTRY_PHONE}`;

    const result = await retryWithBackoff(async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

      const response = await fetch(url, {
        method: 'GET',
        headers: API_HEADERS,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.status === 429) {
        throw new Error(
          'Rate limit excedido. Tente novamente em alguns segundos.'
        );
      }

      if (!response.ok) {
        throw new Error(
          `Erro na API: ${response.status} - ${response.statusText}`
        );
      }

      const data: PhoneValidationResponse = await response.json();

      const isValid = data.phone_validation?.is_valid || false;

      const validationResult = {
        isValid: isValid,
        data: data,
      };

      phoneValidationCache.set(cleanPhone, {
        result: validationResult,
        timestamp: Date.now(),
      });

      return validationResult;
    });

    return result;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        isValid: false,
        error: MESSAGES.API.TIMEOUT,
      };
    }

    if (error instanceof Error && error.message.includes('Rate limit')) {
      return {
        isValid: false,
        error: MESSAGES.API.RATE_LIMIT,
      };
    }

    return {
      isValid: false,
      error:
        error instanceof Error ? error.message : MESSAGES.API.UNKNOWN_ERROR,
    };
  }
}
