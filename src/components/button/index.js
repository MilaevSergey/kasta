import React from 'react';
import { ScButton } from './styled';

export const Button = ({ text, clickHandler }) => {
  return <ScButton onClick={clickHandler}>{text && text}</ScButton>;
};
