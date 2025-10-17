import { defaultTheme } from '@theme/index';
import styled from 'styled-components/native';
import { CustomTextProps } from './type';

export const Text = styled.Text<Partial<CustomTextProps>>`
  font-size: ${({ theme, size }) =>
    size ? theme.FONT_SIZE[size] : theme.SIZES.md}px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ theme, hasError, color }) => {
    if (hasError) return theme.COLORS.redDark;
    if (color) return theme.COLORS[color];
    return theme.COLORS.gray;
  }};
`;
