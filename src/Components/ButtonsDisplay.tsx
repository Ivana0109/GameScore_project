import React from "react";
import styles from "./ButtonsDisplay.module.css";
import { TeamButtons } from "../Container/types";



function ButtonsDisplay({
  setScoreHome,
  dataHome,
  setScoreAway,
  dataAway,
  resetScore,
}:TeamButtons) {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={() => {
          setScoreHome(dataHome.score + 1);
        }}
      >
        +
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setScoreHome(dataHome.score > 0 ? dataHome.score - 1 : 0);
        }}
      >
        -
      </button>

      <button className={styles.reset} onClick={resetScore}>
        RESET
      </button>

      <button
        className={styles.btn}
        onClick={() => {
          setScoreAway(dataAway.score + 1);
        }}
      >
        +
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setScoreAway(dataAway.score > 0 ? dataAway.score - 1 : 0);
        }}
      >
        -
      </button>
    </div>
  );
}

export default ButtonsDisplay;
