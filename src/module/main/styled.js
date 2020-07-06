import styled from 'styled-components/macro';

export const ScMain = styled.div`
  max-width: 460px;
  margin: 0 auto;
  background: #f5f5f5;
  border-radius: 10px;
  & > div {
    &:first-child {
      background: ${({ theme }) => theme.basicDarkColor};
      border-radius: 10px 10px 0 0;
      height: 80px;
      padding: 14px;
      display: flex;
      justify-content: space-between;
      & > div {
        height: 100%;
        & > p {
          text-align: right;
          color: ${({ theme }) => theme.basicBackLightGrey};
          &:nth-child(1) {
            margin-bottom: 14px;
            font-size: 12px;
          }
          &:nth-child(2) {
            font-size: 18px;
          }
        }
      }
    }
    &:nth-child(2) {
      padding: 14px 14px 30px;
      & > form {
        position: relative;
        background: ${({ theme }) => theme.basicWhite};
        border-radius: 10px;
        box-shadow: 0 0 10px 2px ${({ theme }) => theme.basicShadow};
        & > div {
          position: relative;
          padding: 14px 30px;
          &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            width: 100%;
            height: 1px;
            background-image: linear-gradient(
              90deg,
              transparent,
              transparent 50%,
              ${({ theme }) => theme.basicBackLightGrey} 50%,
              ${({ theme }) => theme.basicBackLightGrey} 100%
            );
            background-size: 10px 1px;
          }
          &:first-child {
            padding: 14px;
            display: flex;
            justify-content: space-between;
            & > div {
              padding-left: 20px;
              & > p {
                &:first-child {
                  position: relative;
                  color: ${({ theme }) => theme.basicBlue};
                  margin-bottom: 6px;
                  font-size: 16px;
                  &:before {
                    content: '';
                    height: 14px;
                    width: 14px;
                    background: ${({ theme }) => theme.basicBlue};
                    border-radius: 50%;
                    position: absolute;
                    left: -20px;
                    top: 0;
                  }
                }
                &:last-child {
                  font-size: 12px;
                  color: ${({ theme }) => theme.basicDarkGrey};
                }
              }
            }
          }
          &:nth-child(2) {
            & > div {
              display: flex;
              margin-bottom: 14px;
              justify-content: space-between;
              &:last-child {
                margin-bottom: 0;
              }
              & > div {
                &:first-child {
                  width: calc(100% - 130px);
                }
                &:last-child {
                  width: 120px;
                }
              }
            }
          }
          &:nth-child(3) {
            & > div {
              text-align: center;
              &:first-child {
                margin-bottom: 14px;
              }
              &:nth-child(2) {
                margin-bottom: 10px;
              }
              &:nth-child(3) {
                font-size: 12px;
                color: ${({ theme }) => theme.basicDarkGrey};
              }
            }
          }
          &:last-child {
            &:after {
              display: none;
              height: 0;
            }
          }
        }
        & > p {
          z-index: 100;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          heigth: 100%;
          width: 100%;
          background: ${({ theme }) => theme.basicWhite};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          & > img {
            margin-bottom: 10px;
          }
        }
      }
    }
    &:nth-child(3) {
      display: flex;
      align-item: center;
      justify-content: space-between;
      background: ${({ theme }) => theme.blockLightGrey};
      padding: 20px;
    }
    &:last-child {
      height: 80px;
      background: ${({ theme }) => theme.basicDarkColor};
      border-radius: 0 0 10px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > img {
        max-width: 160px;
      }
    }
  }
`;
