import styled from 'styled-components/macro';

export const ScInput = styled.div`
  min-height: 94px;
  & > div {
    margin-bottom: 3px;
    & > span {
      margin-right: 4px;
    }
  }
  & > label {
    width: 100%;
    & > input {
      width: 100%;
      outline: none;
      border-radius: ${({ theme }) => theme.basicBlockSmallRadius};
      border: 1px solid ${({ theme }) => theme.basicGrey};
      height: 40px;
      padding: 0 10px;
      margin-bottom: 3px;
      font: 400px 14px / 16px ${({ theme }) => theme.mainFont};
      letter-spacing: 1.5px;
      &:focus {
        border: 1px solid ${({ theme }) => theme.basicBlue};
      }
    }
    & > p {
      color: ${({ theme }) => theme.basicErrorRed};
      font: 400 13px / 14px ${({ theme }) => theme.mainFont};
    }
  }
`;

export const ScInputCheckBox = styled.div`
  text-align: center;
  & > label {
    cursor: pointer;
    & > input {
      margin-right: 4px;
    }
    & > span {
      user-select: none;
      margin-right: 4px;
    }
  }
`;
