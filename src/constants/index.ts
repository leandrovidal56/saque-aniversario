export const APP_CONSTANTS = {
  PHONE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 11,
  },
  MONEY: {
    MIN_VALUE: 0.01,
    MAX_VALUE: 1000000,
  },
  VALIDATION: {
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
  },
} as const;

export const MESSAGES = {
  VALIDATION: {
    PHONE_INVALID: 'Telefone inválido',
    PHONE_TOO_SHORT: 'Número de telefone muito curto',
    PHONE_TOO_LONG: 'Número de telefone muito longo',
    PHONE_REQUIRED: 'O telefone é obrigatório',
    NAME_REQUIRED: 'O nome é obrigatório',
    NAME_MIN_LENGTH: 'No mínimo 3 caracteres',
    BALANCE_REQUIRED: 'O saldo é obrigatório',
    BALANCE_MIN_VALUE: 'O valor deve ser maior que zero',
    MONTH_REQUIRED: 'Selecione o mês de aniversário',
  },
  API: {
    TIMEOUT: 'Timeout na validação do telefone',
    NETWORK_ERROR: 'Erro de conexão',
    UNKNOWN_ERROR: 'Erro desconhecido',
    API_KEY_MISSING: 'Chave da API não configurada',
    RATE_LIMIT: 'Muitas tentativas. Aguarde alguns segundos e tente novamente.',
    RATE_LIMIT_RETRY: 'Tentando novamente em alguns segundos...',
  },
} as const;
