import React from "react";
import styles from "./ScoreTimerDisplay.module.css";

function ScoreTimerDisplay({ scores }) {
  return (
    scores.length > 0 && (
      <div className={styles.container}>
        {scores.map((item, itemIndex) => {
          return (
            <div className={styles.itemContainer} key={itemIndex}>
              <div>
                {item.homeScore}:{item.awayScore}{" "}
              </div>{" "}
              <div>
                {" "}
                {item.currentTime.min}' {item.currentTime.sec}''
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default ScoreTimerDisplay;
