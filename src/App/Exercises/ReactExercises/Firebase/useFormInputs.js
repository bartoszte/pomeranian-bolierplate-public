import { useState } from 'react';

export const useFormInputs = () => {
  const [inputs, setInputs] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // PONIZEJ WASY SA UMIESZCZONE W NAWIASIE ZEBY ZASYGNALIZOWAC ZE ZWRACAMY OBIEKT
    // BEZ NAWIASOW SAME WASY ZNACZYLYBY ZE DEFINIUJESZ WYRAZENIE
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  return [inputs, handleInputChange];
};
