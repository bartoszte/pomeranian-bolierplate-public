import { useEffect, useState } from 'react';
import { FakeDataPromise } from './FakeDataPromise';
import { SimulateApi } from './SimulateApi';

export const UseEffectAndPromiseExercise = () => {
  const [text, setText] = useState('');

  const samplePromise = new Promise((resolve, reject) => {
    const success = true;
    // const success = false;

    if (success) {
      const successText = "I'm resolved";
      resolve(successText);
    } else {
      const failedText = "Sorry, I'm not resolved";
      reject(failedText);
    }
  });

  useEffect(() => {
    samplePromise
      .then((successText) => {
        console.log(successText, 'to jest komunikat przekazany z resolve');
        setText(successText);
      })
      .catch((failedText) => {
        console.log(failedText, 'to jest komunikat przekazany z reject');
        setText(failedText);
      })
      .finally(() => {
        console.log('samplePromise finished');
      });
  }, []);

  // samplePromise
  //   .then((successText) => {
  //     console.log(successText, 'to jest komunikat przekazany z resolve');
  //     setText(successText);
  //   })
  //   .catch((failedText) => {
  //     console.log(failedText, 'to jest komunikat przekazany z reject');
  //     setText(failedText);
  //   })
  //   .finally(() => {
  //     console.log('samplePromise finished');
  //   });

  return (
    <div>
      <h2>Zadanie</h2>
      <div>{text}</div>
      <FakeDataPromise />
      <SimulateApi />
    </div>
  );
};
