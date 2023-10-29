import { useState } from 'react';
import './styles.css';

export const Button = ({ value, variant = 'primary', onClick }) => {
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
      onClick={() => {
        onClick();
        // setVariantTmp('secondary');
      }}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
};
