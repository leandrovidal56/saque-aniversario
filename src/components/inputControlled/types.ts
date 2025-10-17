import { createNumberMask } from 'react-native-mask-input';
export const phoneMask = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const moneyMask = createNumberMask({
  prefix: ['R', '$', ' '],
  delimiter: '.',
  separator: ',',
  precision: 2,
});
