import { useState, useEffect } from 'react';

export const VanishString = () => {
  const [text, setText] = useState('Domyślny tekst');
  const [clickedCount, setClickedCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState('Domyślny tekst');

  const handleButtonClick = () => {
    setClickedCount((prevCount) => prevCount + 1);
    const timeout = setTimeout(() => {
      setClickedCount(0);
    }, 3000);
    setTimeoutId(timeout);
  };

  return (
    <div>
      vanish string
      <div>
        <button onClick={handleButtonClick}>Start</button>
        {clickedCount > 0 && <p>{text}</p>}
      </div>
    </div>
  );
};
