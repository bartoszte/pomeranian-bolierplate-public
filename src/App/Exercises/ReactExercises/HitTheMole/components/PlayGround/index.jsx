import { useState } from 'react';
import './styles.css';
import { generateArrayOfFields, generateRandomNumbForMole } from '../../helper';

export const PlayGround = ({ molePositionId }) => {
  const [gameFields, setGameFields] = useState(generateArrayOfFields(10));
  // const [molePositionId, setMolePositionId] = useState(
  //   generateRandomNumbForMole(10)
  // );
  // console.log(gameFields, molePositionId);

  const handleFieldClick = (id, isMolePresent) => {
    setGameFields((prevState) =>
      prevState.map((field) => {
        return {
          ...field,
          hasClicked: field.id === id ? true : false,
        };
      })
    );

    handleResetClick();
  };

  const handleResetClick = () => {
    setTimeout(() => {
      setGameFields(
        gameFields.map((field) => ({ ...field, hasClicked: false }))
      );
    }, 200);
  };

  return (
    <div>
      playground tutaj bedzie
      {/* dlaczego ten style do div musi byc tutaj? */}
      <div style={{ display: 'flex' }}>
        {gameFields.map(({ id, hasClicked }) => {
          const isMolePresent = id === molePositionId;
          const isClickedWithMole = isMolePresent && hasClicked;
          const isClickedWithoutMole = !isMolePresent && hasClicked;

          const clickedWithMoleClassName = isClickedWithMole
            ? 'field-green'
            : '';
          const clickedWithoutMoleClassName = isClickedWithoutMole
            ? 'field-red'
            : '';

          const className = `fieldMole ${clickedWithMoleClassName} ${clickedWithoutMoleClassName}`;

          return (
            <div
              onClick={() => handleFieldClick(id, isMolePresent)}
              key={id}
              className={className}
            >
              {isMolePresent && 'KRET'}
            </div>
          );
        })}
      </div>
    </div>
  );
};
