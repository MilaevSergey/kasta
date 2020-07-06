import React from 'react';
import { ScInput, ScInputCheckBox } from './styled';
import { Tooltip } from '../tooltip';
export const Input = ({
  title,
  tooltip,
  placeholder,
  errorText,
  isValid,
  value,
  validHandler,
  type,
  name,
  id,
}) => {
  return (
    <ScInput>
      {title && (
        <div>
          <span>{title}</span>
          {tooltip && <Tooltip text={tooltip} />}
        </div>
      )}
      <label>
        <input
          id={id}
          value={value}
          onBlur={(e) => {
            validHandler(parseInt(e.currentTarget.id), e.target.value);
          }}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {errorText && !isValid && <p>{errorText}</p>}
      </label>
    </ScInput>
  );
};

export const InputCheckBox = ({ title, stateHandler, tooltip, type, name }) => {
  return (
    <ScInputCheckBox>
      <label>
        <input
          type={type}
          name={name}
          defaultChecked={
            stateHandler.stateDefault.inputCheckboxSaveCard &&
            stateHandler.stateDefault.inputCheckboxSaveCard
          }
          onClick={() => stateHandler.checkboxHandler()}
        />
        <span>{title}</span>
      </label>
      {tooltip && <Tooltip text={tooltip} />}
    </ScInputCheckBox>
  );
};
