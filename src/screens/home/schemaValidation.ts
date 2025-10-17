import * as yup from 'yup';
import { APP_CONSTANTS, MESSAGES } from '../../constants';

export const simulationSchema = yup.object({
  nome: yup
    .string()
    .required(MESSAGES.VALIDATION.NAME_REQUIRED)
    .min(3, MESSAGES.VALIDATION.NAME_MIN_LENGTH)
    .test(
      'nome-nao-vazio',
      'O nome não pode ficar vazio',
      (value) => !!value?.trim()
    ),
  telefone: yup
    .string()
    .required(MESSAGES.VALIDATION.PHONE_REQUIRED)
    .test('telefone-formato', 'Telefone incompleto', (value) => {
      if (!value) return false;
      const digits = value.replace(/\D/g, '');
      return (
        digits.length >= APP_CONSTANTS.PHONE.MIN_LENGTH &&
        digits.length <= APP_CONSTANTS.PHONE.MAX_LENGTH
      );
    }),
  saldoFgts: yup
    .number()
    .typeError('Informe um valor válido')
    .moreThan(0, MESSAGES.VALIDATION.BALANCE_MIN_VALUE)
    .required(MESSAGES.VALIDATION.BALANCE_REQUIRED),
  mesAniversario: yup.string().required(MESSAGES.VALIDATION.MONTH_REQUIRED),
});
