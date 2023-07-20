import React from "react";
import styles from "./ScoreTimerDisplay.module.css";
import { ScoreResults } from "../Container/types";
type Props={
  scores:ScoreResults[]
}
function ScoreTimerDisplay({ scores }:Props) {
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
