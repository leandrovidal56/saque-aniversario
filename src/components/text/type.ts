import { defaultTheme } from '@theme/index';
import { TextStyle } from 'react-native';

export type CustomTextProps = {
  message?: string;

  size?: keyof typeof defaultTheme.FONT_SIZE;
  color?: keyof typeof defaultTheme.COLORS;
  hasError?: boolean;
  fontWeight?: 'normal' | 'bold' | number;
} & TextStyle;
