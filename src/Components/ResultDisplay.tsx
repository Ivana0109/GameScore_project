import React from "react";
import styles from "./ResultDisplay.module.css";
import { TeamData } from "../Container/types";


function ResultDisplay({ dataHome, dataAway }:TeamData) {
  return (
    <div className={styles.container}>
      <div>
        <img src={dataHome.imgSrc} alt={dataHome.name} className={styles.img} />
        <p>{dataHome.name} </p>
      </div>
      <h2>{dataHome.score}</h2>
      <h2> : </h2>
      <h2>{dataAway.score}</h2>
      <div>
        <img src={dataAway.imgSrc} alt={dataAway.name} className={styles.img} />
        <p>{dataAway.name} </p>
      </div>
    </div>
  );
}

export default ResultDisplay;
