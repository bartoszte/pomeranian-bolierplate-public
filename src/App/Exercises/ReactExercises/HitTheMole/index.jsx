import { useEffect, useState } from 'react';
import { StartMenu } from './components/StartMenu';
import { GameMenu } from './components/GameMenu';
import { PlayGround } from './components/PlayGround';
import { generateRandomNumbForMole } from './helper';

export const HitTheMole = () => {
  const [initialTime, setInitialTime] = useState(60);
  const [moleAmount, setMoleAmount] = useState(1);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [score, setScore] = useState(0);
  const [timeVar, setTimeVar] = useState(60);

  const [molePositionId, setMolePositionId] = useState(
    generateRandomNumbForMole(10)
  );

  const handleStartGame = () => {
    setTimeVar(initialTime);
    setScore(0);
    setGameEnded(false);
    setIsGameStarted(true);
    const interval = setInterval(() => {
      setMolePositionId(generateRandomNumbForMole(10));
    }, 800);

    setIntervalId(interval);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setGameEnded(true);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  //   w zaleznosci od czasu bedzie wywolywany useEffect
  // operacje wykonaj tylko gdy czas wiekszy od zera
  useEffect(() => {
    if (isGameStarted) {
      const intervalId2 = setInterval(() => {
        timeVar > 0 && setTimeVar((prevState) => prevState - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId2);
      };
    }
  }, [timeVar, isGameStarted]);

  useEffect(() => {
    if (timeVar === 0) {
      handleStopGame();
      setGameEnded(true);

    }
  }, [timeVar]);

  return (
    <div>
      <h3>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h3>

      <div>
        {initialTime} {moleAmount}
      </div>
      {/* StartMenu */}

      {isGameEnded && <div>Gratulacje! Udało Ci się złapać kreta {score} razy w czasie{' '}{initialTime-timeVar} sekund</div>}

      {!isGameStarted ? (
        <StartMenu
          setInitialTime={setInitialTime}
          setMoleAmount={setMoleAmount}
          setGameStarted={handleStartGame}
        />
      ) : (
        <>
          {/* GameMenu */}
          <GameMenu time={timeVar} score={score} stopGame={handleStopGame} />
          {/* Playground */}
          <PlayGround score={score} setScore={setScore} molePositionId={molePositionId} />
        </>
      )}
    </div>
  );
};
