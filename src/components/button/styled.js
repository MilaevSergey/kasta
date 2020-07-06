import styled from 'styled-components/macro';

export const ScButton = styled.button`
  cursor: pointer;
  outline: none;
  user-select: none;
  background: ${({ theme }) => theme.basicRed};
  border: 1px solid ${({ theme }) => theme.basicRed};
  border-radius: ${({ theme }) => theme.basicBlockSmallRadius};
  color: ${({ theme }) => theme.basicWhite};
  min-width: 300px;
  text-align: center;
  padding: 10px 20px;
  &:hover {
    background: ${({ theme }) => theme.basicLightRed};
    border: 1px solid ${({ theme }) => theme.basicLightRed};
  }
  &:active {
    background: ${({ theme }) => theme.basicRed};
    border: 1px solid ${({ theme }) => theme.basicRed};
  }
`;
