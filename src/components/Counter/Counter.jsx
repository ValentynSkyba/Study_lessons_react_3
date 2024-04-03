import { unstable_renderSubtreeIntoContainer } from "react-dom";
import s from "./Counter.module.css";
import { useCallback, useEffect, useState } from "react";

export const Counter = () => {
  // хук
  const [counter, setCounter] = useState(0);

  // крок
  const [step, setStep] = useState(1);
  // console.log('Render');

  //монтується один раз
  useEffect(() => {
    console.log("Mount component");
  }, []);

  //виконається перший раз та наступні рази при зміні лічильника
  useEffect(() => {
    if (counter === 0) return;
    // щоб не виконувалось в перший раз та не відображадось в консолі
    console.log("update");
    if (counter > 5) {
      alert("Error");
    }
    if (counter < -5) {
      setCounter(0);
    }
  }, [counter]);

  //виконається кожни раз при зміні компоненту
  useEffect(() => {
    console.log("Render");
  });

  //виконається перший раз та наступні рази при зміні короку
  useEffect(() => {
    if (step === 1) return;
    console.log("update step");
  }, [step]);

  //виконається перший раз та наступні рази при зміні короку або лічильника
  useEffect(() => {
    console.log("зміні короку або лічильника");
  }, [step, counter]);

  let count = 0;
  const handleIncrement = () => {
    // count++;
    // console.log(`conter is ${count}`);

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prev) => prev + step);
    // setCounter((prev) => prev + 3);
    // setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    //   setCounter(counter - 1);
    setCounter((prev) => prev - step);
  };

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={(e) => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button className="btn" onClick={handleDecrement}>
            minus
          </button>
          <button className="btn" onClick={handleReset}>
            reset
          </button>
          {/* <button className="btn" onClick={() => console.log("Hello")}>
				cool
			</button> */}

          <button className="btn" onClick={handleIncrement}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
