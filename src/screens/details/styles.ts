import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

export const Content = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin: 30px;
  gap: 20px;
`;
export const Image = styled.ImageBackground`
  width: auto;
  height: 450px;
  margin-top: -50px;
`;
