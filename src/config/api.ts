import { PHONE_VALIDATION_API_KEY, PHONE_VALIDATION_API_URL } from '@env';

export const API_CONFIG = {
  PHONE_VALIDATION: {
    BASE_URL: PHONE_VALIDATION_API_URL,
    COUNTRY_PHONE: 'BR',
    API_KEY: PHONE_VALIDATION_API_KEY,
  },
} as const;

export const API_TIMEOUT = 10000;

export const API_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as const;

export const RATE_LIMIT_CONFIG = {
  MAX_RETRIES: 3,
  BASE_DELAY: 1000,
  CACHE_DURATION: 5 * 60 * 1000,
  DEBOUNCE_DELAY: 500,
} as const;
