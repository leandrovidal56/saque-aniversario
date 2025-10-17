import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';

import { Props } from './type';

export function Button({
  title,
  small,
  background,
  borderColor,
  textColor,
  marginBottom,
  disabled,
  loading = false,
  ...rest
}: Props) {
  return (
    <Container
      disabled={disabled || loading}
      small={small}
      background={background}
      borderColor={borderColor}
      marginBottom={marginBottom}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor || '#FFFFFF'} />
      ) : (
        <Title textColor={textColor}>{title}</Title>
      )}
    </Container>
  );
}
