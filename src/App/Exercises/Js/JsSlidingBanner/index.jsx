import './styles.css';
import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

export const JsSlidingBanner = () => {
  const [intervalCount, setIntervalCount] = useState(0);
  const [start, setStart] = useState(false);
  const [sliderValue, setSliderValue] = useState(100);

  const handleClick = () => {
    setStart((prevState) => !prevState);
  };

  const handleSliderMove = (event, newValue) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    if (!start) return;
    if (intervalCount == 240) setIntervalCount(0);

    const interval = setInterval(() => {
      setIntervalCount((prevCount) => prevCount + 1);
    }, sliderValue);

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
        <div
          className="container--jsSlidingBanner"
          style={{ left: intervalCount - 240 }}
        >
          I love JavaScript!
        </div>
      </div>

      <div>Wartosc: {intervalCount}</div>
      <button onClick={handleClick}>Start/stop</button>
      <div className="container--speedSlider">
        <div>Szybkość przesuwania: {sliderValue}</div>
        <Slider
          style={{ width: '240px' }}
          value={sliderValue}
          onChange={handleSliderMove}
        />
      </div>
    </div>
  );
};

const TextAnimation = () => {
  return (
    <div
      style={{
        width: '250px',
        height: '250px',
        overflow: 'hidden',
        position: 'relative',
      }}
    ></div>
  );
};
