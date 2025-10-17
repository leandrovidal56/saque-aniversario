import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.blue};
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.white};
  position: relative;
  opacity: 0.9;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.bg}px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: white;
  text-align: center;
  line-height: ${({ theme }) => theme.SIZES.lg}px;
`;

export const HeaderSubtitle = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
  margin-top: ${({ theme }) => theme.SIZES.sm}px;
  opacity: 0.9;
`;

export const FormWrapper = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: ${({ theme }) => theme.SIZES.md}px;
  padding: ${({ theme }) => theme.SIZES.md}px;
  position: absolute;
  top: 30%;
`;

export const Card = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.blue};
`;

export const DropdownWrapper = styled.View`
  margin-vertical: ${({ theme }) => theme.SIZES.md}px;
  height: 50px;
  background-color: white;
  border-radius: ${({ theme }) => theme.SIZES.md}px;
  padding: ${({ theme }) => theme.SIZES.md}px;

  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 1.41px;
  elevation: 2;
`;
