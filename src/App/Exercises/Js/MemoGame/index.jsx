// import { useActionData } from 'react-router-dom';
import { GoBackButton } from '../../../Components/GoBack/GoBack';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { useState, useEffect } from 'react';
import { Tile } from './components/Tile';
import { getAlphabet, shuffle } from './Utilities';
import { formatTime } from './Utilities';

export const MemoGame = () => {
  const ELEMENTS = [4, 16, 20];
  const charactersForTiles = getAlphabet(10);
  const [noOfElements, setNoOfElements] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [firstClickId, setFirstClickId] = useState();
  const [secondClickId, setSecondClickId] = useState();
  const [score, setScore] = useState(0);
  const [timeVar, setTimeVar] = useState(0);
  const [timeIntervalId, setTimeIntervalId] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
  const [goodTilesNumb, setGoodTilesNumb] = useState(0);
  // const [scoreHistoryTable, setScoreHistoryTable] = useState([
  //   { scoreH: null, timeH: null },
  // ]);
  const [scoreHistoryTable, setScoreHistoryTable] = useState([]);
  const [isHistoryDisplayed, setIsHistoryDisplayed] = useState(false);

  //   console.log('wybrana liczbka kafelkow', noOfElements);
  //   console.log('alfabet', charactersForTiles);

  const handleButtonClick = (element) => {
    setNoOfElements(element);
  };

  function getInitialTiles(size) {
    // slice ponizej zwraca polowe po to zeby linijke pozniej sklejac tablice z dwoch polowek
    // po co dwie polowki? zeby tablica zawierala PARY LITER
    const charactersSubset = charactersForTiles.slice(0, size / 2);
    const allCharacters = [...charactersSubset, ...charactersSubset];
    // const shuffledCharacters = allCharacters.sort(() => Math.random() - 0.5);
    const shuffledCharacters = shuffle(allCharacters);

    //transform flat alphabet arrat to array of objects with specyfic letters with pairs of object with this same data
    const characterObject = shuffledCharacters.map((character, index) => {
      return { index, value: character, isVisible: false, variant: 'neutral' };
    });
    console.log('characterObject', characterObject);
    return characterObject;
  }

  // const handleTileClicked = (indexVar) => {
  //   setClicksNumber((prev) => prev + 1);
  //   console.log(tiles, 'co siedzi w tiles');
  //   const updatedTiles = tiles.map(({ index, value, isVisible, variant }) => {
  //     // if (index === indexVar) {
  //     //   isVisible = true;
  //     // }
  //     return {
  //       index: index,
  //       value: value,
  //       isVisible: index === indexVar,
  //       variant: variant,
  //     };
  //   });
  //   console.log(updatedTiles);
  //   setTiles(updatedTiles);
  // };

  const handleTileClicked = (indexVar) => {
    if (
      tiles.some((tile) => tile.index === indexVar && tile.isVisible === true)
    )
      return;

    setTiles(
      tiles.map((tile) => ({
        ...tile,
        isVisible: tile.index === indexVar ? true : tile.isVisible,
      }))
    );

    if (firstClickId === undefined) {
      setFirstClickId(indexVar);
    } else {
      setSecondClickId(indexVar);
    }
  };

  function handleMemoStart() {
    if (noOfElements !== null) {
      setTiles(getInitialTiles(noOfElements));
      setScore(0);
      setGoodTilesNumb(0);
      clearInterval(timeIntervalId);
      setTimeVar(0);
      setGameEnded(false);
      setIsGameStarted(true);
      const intervalNumb = setInterval(() => {
        setTimeVar((prevTime) => prevTime + 1000);
      }, 1000);
      setTimeIntervalId(intervalNumb);
    }
  }

  function handleMemoStop() {
    clearInterval(timeIntervalId);
    setGameEnded(true);
    setIsGameStarted(false);
    // console.log(checkNumberOfGoodTiles(), 'liczba odgadnietych par');

    checkNumberOfGoodTiles();
    console.log(score, goodTilesNumb, 'wynik score');
  }

  function handleResetIncorrect(indexVar) {
    setTiles((oldTiles) => {
      const newTiles = oldTiles.map((tile) => {
        if (tile.index === indexVar) {
          return {
            ...tile,
            isVisible: false,
            variant: 'neutral',
          };
        } else {
          return tile;
        }
      });

      return newTiles;
    });
  }

  const showHistory = () => {
    setIsHistoryDisplayed((lastState) => !lastState);
  };

  useEffect(() => {
    let timeoutIdArray = [];

    tiles
      .filter((tile) => tile.variant === 'incorrect')
      .forEach((tile) => {
        const timeoutId = setTimeout(handleResetIncorrect, 500, tile.index);

        timeoutIdArray.push(timeoutId);
      });

    return () => {
      timeoutIdArray.forEach((id) => {
        clearTimeout(id);
      });
    };
  }, [tiles]);

  useEffect(() => {
    if (firstClickId !== undefined && secondClickId !== undefined) {
      setTiles((oldTiles) => {
        const newTiles = [...oldTiles];
        const first = newTiles[firstClickId];
        const second = newTiles[secondClickId];

        let variant = 'neutral';

        if (first.value === second.value) {
          variant = 'correct';
        } else {
          variant = 'incorrect';
        }

        newTiles[firstClickId] = { ...first, variant };
        newTiles[secondClickId] = { ...second, variant };

        return newTiles;
      });
      setFirstClickId(undefined);
      setSecondClickId(undefined);
    }
  }, [firstClickId, secondClickId]);

  // useEffect(() => {
  //   if (timeVar === 180) {
  //     handleMemoStop();
  //   }
  // }, [timeVar]);

  const checkNumberOfGoodTiles = () => {
    tiles.forEach((tile) => {
      if (tile.variant === 'correct') {
        setGoodTilesNumb((prev) => prev + 1);
      }
    });
  };

  useEffect(() => {
    setScore(goodTilesNumb / 2);
  }, [goodTilesNumb]);

  useEffect(() => {
    if (isGameEnded) {
      setScoreHistoryTable((prevArray) => {
        // const newArray = [...prevArray, { scoreH: score, timeH: 60 - timeVar }];

        const newArray = [...prevArray];
        newArray.push({ scoreH: score, timeH: formatTime(timeVar) });

        return newArray;
      });
    }
  }, [score]);

  useEffect(() => {
    console.log(scoreHistoryTable, 'tablica historyczna');
  }, [scoreHistoryTable]);

  return (
    <div>
      <GoBackButton buttonTitle="< MEMO" />
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {/* <div>Wynik gry: {score}</div> */}
      {/* <div>Czas: {timeVar}</div> */}
      {isGameEnded && (
        <h2>
          Gratulacje! Twój wynik to {score} par w czasie {formatTime(timeVar)}
        </h2>
      )}
      {isGameStarted ? (
        <div>
          <div className="memo-controls-panel">
            <Label>Czas gry</Label>
            <Button value={formatTime(timeVar)} variant="disabled" />
          </div>

          <div className="memo-controls-panel">
            <Label>Przyciski sterujace</Label>
            <Button value="PASS" onClick={handleMemoStop} variant="tertiary" />
          </div>
          <div className="memo-board">
            {tiles.map(({ index, value, isVisible, variant }) => (
              <Tile
                isVisible={isVisible}
                key={index}
                value={value}
                variant={variant}
                onClick={() => handleTileClicked(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          {' '}
          <div className="memo-controls-panel">
            <Label>Przykładowy label</Label>

            {/* <Button value={'przycisk testowy'} /> */}

            {/* Nawiasy WĄSY bo chce uzyc JavaScript w HTML*/}
            {/* zwrocenie tablicy przyciskow, dzieki czemu dodanie elementu do tablicy automatycznie doda nowy przycisk */}
            {ELEMENTS.map((element) => (
              <Button
                key={element}
                value={element + ' elementów'}
                onClick={() => handleButtonClick(element)}
                // variant={'primary'}
                variant={element !== noOfElements ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="memo-controls-panel">
            <Label>Przyciski sterujace</Label>
            <Button value="START" onClick={handleMemoStart} />
          </div>
        </>
      )}
      <div className="memo-controls-panel">
        <Label>Historia gier</Label>
        <Button
          value={isHistoryDisplayed ? 'Ukryj' : 'Pokaż'}
          onClick={showHistory}
        />
      </div>
      {isHistoryDisplayed && (
        <>
          <tr>
            <th>Ilość par</th>
            <th>Czas gry</th>
          </tr>
          {scoreHistoryTable.map((singleObj) => (
            <tr>
              <td>{singleObj.scoreH}</td>
              <td>{singleObj.timeH}</td>
            </tr>
          ))}
        </>
      )}
    </div>
  );
};
