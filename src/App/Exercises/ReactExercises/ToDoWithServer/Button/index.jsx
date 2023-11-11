import { useState } from 'react';
import './styles.css';

export const Button = ({ value, variant = 'primary', onClickFunc }) => {
  const [variantTmp, setVariantTmp] = useState('primary');
  if (
    !(
      variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary' ||
      variant === 'disabled'
    )
  )
    console.warn('Błędny parametr variant', variant);

  const isDisabled = variant === 'disabled' ? true : false;
  return (
    <button
      className={`memo-button memo-button--${variant}`}
      // onClick={() => {
      //   onClick();
      // }}
      onClick={onClickFunc}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
};
