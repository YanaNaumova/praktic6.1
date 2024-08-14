import styles from "../styles/Timer.module.css";
import { useState, useEffect } from "react";

function Timer() {
  const [curentTime, setCurentTime] = useState(0);
  const [isAktiv, setIsAktiv] = useState(false);

  useEffect(() => {
    let timerId;
    if (isAktiv) {
      timerId = setInterval(updateTime, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isAktiv]);

  function updateTime() {
    setCurentTime((prev) => prev + 1);
  }

  function startTimer() {
    setIsAktiv(true);
    console.log(isAktiv);
  }

  function stopTimer() {
    setIsAktiv(false);
    console.log(isAktiv);
  }

  function resetTimer() {
    setIsAktiv(false);
    setCurentTime(0);
    console.log(isAktiv);
  }

  return (
    <div className={styles.container}>
      <h1>{curentTime}</h1>
      <div className={styles.btn}>
        <button onClick={startTimer}>Старт</button>
        <button onClick={stopTimer}>Стоп</button>
        <button onClick={resetTimer}>Сброс</button>
      </div>
    </div>
  );
}

export default Timer;
