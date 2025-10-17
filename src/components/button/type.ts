import { defaultTheme } from '@theme/index';
import { TouchableOpacityProps } from 'react-native';

export type Props = TouchableOpacityProps & {
  title: string;
  small?: boolean;
  background?: keyof typeof defaultTheme.COLORS;
  borderColor?: keyof typeof defaultTheme.COLORS;
  textColor?: keyof typeof defaultTheme.COLORS;
  marginBottom?: keyof typeof defaultTheme.SIZES;
  loading?: boolean;
};
