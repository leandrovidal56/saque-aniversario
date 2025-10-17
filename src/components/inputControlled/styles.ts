import styled, { css } from 'styled-components/native';

interface ContainerProps {
  small?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid gray;
  justify-content: center;
  padding: 10px;
  height: 48px;
  position: relative;
  ${({ small }) =>
    small &&
    css`
      margin-bottom: 8px;
    `}
`;
