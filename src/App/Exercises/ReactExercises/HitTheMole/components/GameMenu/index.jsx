import { GenericButton } from '../GenericButton';
import { MenuField } from '../MenuField';

export const GameMenu = ({ stopGame, time, score }) => {
  const handleStop = () => {
    stopGame();
  };
  return (
    <div>
      <MenuField title="Czas do końca">
        {/* <button>1:35</button> */}
        <GenericButton isDisabled>{time}</GenericButton>
      </MenuField>

      <MenuField title="Wynik">
        {/* <button>16</button> */}
        <GenericButton isDisabled>{score}</GenericButton>
      </MenuField>

      <MenuField title="Przyciski sterujące">
        {/* <button onClick={handleStop}>Stop</button> */}
        <GenericButton onClickFunc={handleStop}>STOP</GenericButton>
      </MenuField>
    </div>
  );
};
