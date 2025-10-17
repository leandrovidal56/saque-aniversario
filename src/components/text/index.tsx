import { Text as StyledText } from './styles';
import { CustomTextProps } from './type';

export function Text({
  message,
  size,
  hasError = false,
  color,
  fontWeight,
  ...props
}: CustomTextProps) {
  return (
    <StyledText
      size={size}
      hasError={hasError}
      color={color}
      fontWeight={fontWeight}
      {...props}
    >
      {message}
    </StyledText>
  );
}
