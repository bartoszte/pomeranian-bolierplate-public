import { useState } from 'react';

import { GenericButton } from '../GenericButton';

export const SelectButtons = ({ options, setValue }) => {
  const [newOptions, setNewOptions] = useState(options);

  const handleClick = (val) => {
    setValue(val);

    setNewOptions(
      newOptions.map((option) => ({
        ...option,
        isActive: option.value === val ? true : false,
      }))
    );
  };

  return (
    <div>
      {newOptions.map(({ value, content, isActive }) => {
        return (
          <GenericButton
            isActive={isActive}
            onClickFunc={() => handleClick(value)}
          >
            {content}
          </GenericButton>
        );
      })}
    </div>
  );
};
