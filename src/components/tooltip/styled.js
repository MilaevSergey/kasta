import styled from 'styled-components/macro';

export const ScTooltip = styled.div`
  position: relative;
  display: inline-block;
  & > div {
    cursor: pointer;
    user-select: none;
    height: 20px;
    width: 20px;
    background: ${({ theme }) => theme.basicBackLightGrey};
    border-radius: 50%;
    color: ${({ theme }) => theme.basicWhite};
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 20px;
    font-size: 14px;
    &:hover {
      background: ${({ theme }) => theme.basicBackLightGreyHover};
    }
  }
  & > p {
    ${(props) => (props.isTootlipOpen ? 'display: block;' : ' display: none;')}
    z-index: 10;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(100% + 12px);
    background: ${({ theme }) => theme.basicWhite};
    min-width: 200px;
    font: 400 13px / 16px ${({ theme }) => theme.mainFont};
    color: ${({ theme }) => theme.basicDarkGrey};
    padding: 10px;
    border-radius: ${({ theme }) => theme.basicBlockRadius};
    border: 1px solid ${({ theme }) => theme.basicBackLightGrey};
    box-shadow: 0 0 10px ${({ theme }) => theme.basicShadow};
    &:after {
      z-index: 3;
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      border-style: solid;
      border-width: 10px 10px 0 10px;
      border-color: ${({ theme }) => theme.basicWhite} transparent transparent
        transparent;
    }
    &:before {
      z-index: 2;
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%;
      border-style: solid;
      border-width: 11px 11px 0 11px;
      border-color: ${({ theme }) => theme.basicBackLightGrey} transparent
        transparent transparent;
    }
  }
`;
