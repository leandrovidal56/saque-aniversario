import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Props } from './type';

export const Container = styled(TouchableOpacity)<Partial<Props>>`
  width: ${({ small }) => (small ? '45%' : '100%')};
  height: 50px;
  border-radius: 6px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1.0)};
  border: 1px solid
    ${({ borderColor, theme }) =>
      borderColor ? borderColor : theme.COLORS.gray};
  background-color: ${({ background, theme }) =>
    background ? background : theme.COLORS.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 36)}px;
`;
export const Title = styled.Text<Partial<Props>>`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  line-height: 18.2px;
  color: ${({ textColor, theme }) =>
    textColor ? textColor : theme.COLORS.white};
`;
