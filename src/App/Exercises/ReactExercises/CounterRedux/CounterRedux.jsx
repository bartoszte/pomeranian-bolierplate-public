import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByValue,
  loadStorageValue,
  saveToStorage,
} from '../../../../store/slices/counterSlice';
import { useEffect, useState } from 'react';

export function CounterRedux() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [inputValue, setInputValue] = useState(0);

  const handleAdd = () => {
    dispatch(increment());
    dispatch(saveToStorage());
  };

  const handleDecrement = () => {
    dispatch(decrement());
    dispatch(saveToStorage());
  };

  const handleReset = () => {
    dispatch(reset());
    dispatch(saveToStorage());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(inputValue));
    dispatch(saveToStorage());
  };

  useEffect(() => {
    dispatch(loadStorageValue());
  }, []);

  return (
    <div>
      <h3>Użycie Counter Redux</h3>
      <div>
        <div>{count}</div>
        <button onClick={handleAdd}>Dodaj +1</button>
        <button onClick={handleDecrement}>Odejmij +1</button>
        <button onClick={handleReset}>Resetuj</button>

        <button onClick={handleIncrementByValue}>
          Zwieksz o dana wartość: {inputValue}
        </button>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </div>
    </div>
  );
}
