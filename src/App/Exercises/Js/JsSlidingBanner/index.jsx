import './styles.css';
import { useState, useEffect } from 'react';

export const JsSlidingBanner = () => {
  const [intervalCount, setIntervalCount] = useState(0);
  const [start, setStart] = useState(false);

  const handleClick = () => {
    setStart((prevState) => !prevState);
  };

  useEffect(() => {
    if (!start) return;
    if (intervalCount == 240) setIntervalCount(0);

    const interval = setInterval(() => {
      setIntervalCount((prevCount) => prevCount + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [intervalCount, start]);

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <div>
      <h3>Przesuwany banner</h3>
      <div className="container--jsSlidingBannerBackground">
        <div
          className="container--jsSlidingBanner"
          style={{ left: intervalCount }}
        >
          I love JavaScript!
        </div>
      </div>

      <div>Wartosc: {intervalCount}</div>
      <button onClick={handleClick}>Start/stop</button>
    </div>
  );
};
