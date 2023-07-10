import React, { useState } from "react";

import ButtonsDisplay from "../Components/ButtonsDisplay";
import ResultDisplay from "../Components/ResultDisplay";
import ScoreTimerDisplay from "../Components/ScoreTimerDisplay";
import styles from "./Display.module.css";

function Display() {
  const [dataHome, setDataHome] = useState({
    name: "Atlético Madrid",
    imgSrc: "atletico.png",
    score: 0,
  });
  const [dataAway, setDataAway] = useState({
    name: "Real Madrid",
    imgSrc: "real.png",
    score: 0,
  });
  const [scores, setScores] = useState([]);
  const [start] = useState(new Date());

  const setCurrentTimeScore = (homeScore, awayScore) => {
    setScores([
      ...scores,
      { currentTime: calcGameTime(), homeScore, awayScore },
    ]);
  };

  const setScoreHome = (newScore) => {
    setDataHome({ ...dataHome, score: newScore });
    setCurrentTimeScore(newScore, dataAway.score);
  };

  const setScoreAway = (newScore) => {
    setDataAway({ ...dataAway, score: newScore });
    setCurrentTimeScore(dataHome.score, newScore);
  };
  const currentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return ` ${month < 10 ? `0${month}` : `${month}`} / ${date} / ${year}`;
  };

  const resetScore = () => {
    setDataHome({ ...dataHome, score: 0 });
    setDataAway({ ...dataAway, score: 0 });
    setScores([]);
  };

  const calcGameTime = () => {
    const time = new Date() - start;
    let min = Math.floor((time / 1000 / 60) << 0);
    let sec = Math.floor((time / 1000) % 60);

    return { min, sec };
  };
  const displayGameTime = () => {
    const time = calcGameTime();
    return time.min + ":" + time.sec;
  };
  return (
    <div className={styles.container}>
      <div> {currentDate()}</div>
      <div>{displayGameTime()}</div>

      <ResultDisplay dataHome={dataHome} dataAway={dataAway} />
      <ButtonsDisplay
        setScoreHome={setScoreHome}
        dataHome={dataHome}
        dataAway={dataAway}
        setScoreAway={setScoreAway}
        resetScore={resetScore}
      />
      <ScoreTimerDisplay scores={scores} />
    </div>
  );
}

export default Display;
