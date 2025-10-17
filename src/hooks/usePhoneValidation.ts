import { useState, useCallback, useRef } from 'react';
import { validatePhone } from '../services/validatePhone';
import { RATE_LIMIT_CONFIG } from '../config/api';
import { UsePhoneValidationReturn } from './typePhoneValidation';

export function usePhoneValidation(): UsePhoneValidationReturn {
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    error?: string;
    data?: any;
  } | null>(null);

  const lastValidatedPhone = useRef<string>('');
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const validatePhoneNumber = useCallback(
    async (phone: string) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      if (!phone || phone.length < 10) {
        setValidationResult({
          isValid: false,
          error: 'Número de telefone inválido',
        });
        return;
      }

      const cleanPhone = phone.replace(/\D/g, '');

      if (lastValidatedPhone.current === cleanPhone && validationResult) {
        return;
      }

      debounceTimeout.current = setTimeout(async () => {
        setIsValidating(true);

        try {
          const result = await validatePhone(phone);
          setValidationResult(result);
          lastValidatedPhone.current = cleanPhone;
        } catch (error) {
          setValidationResult({
            isValid: false,
            error: 'Erro ao validar telefone',
          });
          return;
        } finally {
          setIsValidating(false);
        }
      }, RATE_LIMIT_CONFIG.DEBOUNCE_DELAY);
    },
    [validationResult]
  );

  const clearValidation = useCallback(() => {
    setValidationResult(null);
    lastValidatedPhone.current = '';
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
  }, []);
  const resetValidation = () => {
    setValidationResult(null);
  };

  return {
    isValidating,
    validationResult,
    validatePhoneNumber,
    clearValidation,
    resetValidation,
  };
}
