import React, { useState } from 'react';
import { ScTooltip } from './styled';

export const Tooltip = ({ text }) => {
  const [stateDefault, setStateDefault] = useState(false);

  return (
    <ScTooltip isTootlipOpen={stateDefault}>
      <div
        onMouseEnter={() => {
          setStateDefault(!stateDefault);
        }}
        onMouseLeave={() => {
          setStateDefault(false);
        }}
      >
        ?
      </div>

      <p>{text}</p>
    </ScTooltip>
  );
};
