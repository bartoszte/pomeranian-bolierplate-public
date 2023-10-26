import { useState } from 'react';

export const JsTimer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState([]);

  const handleButtonClick = () => {
    const interval = setInterval(() => {
      setElapsedTime((prevCount) => prevCount + 1);
    }, 1000);
    setIntervalId([...intervalId, interval]);
  };

  const handleButtonStopClick = () => {
    intervalId.forEach((interval) => clearInterval(interval));
    setIntervalId([]);
  };

  const handleButtonResetClick = () => {
    setElapsedTime(0);
  };

  return (
    <div>
      <h3>Timer</h3>
      <div>Wartosc timera: {elapsedTime}</div>
      <button onClick={handleButtonClick}>Start timer</button>
      <button onClick={handleButtonStopClick}>Stop timer</button>
      <button onClick={handleButtonResetClick}>Reset timer</button>
    </div>
  );
};
