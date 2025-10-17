export interface UsePhoneValidationReturn {
  isValidating: boolean;
  validationResult: {
    isValid: boolean;
    error?: string;
    data?: any;
  } | null;
  validatePhoneNumber: (phone: string) => Promise<void>;
  clearValidation: () => void;
  resetValidation: () => void;
}
