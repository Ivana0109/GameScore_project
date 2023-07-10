import { useState } from "react";
import "./App.css";
import Display from "./Container/Display";
import B from "./B";

function App() {
  const [resultMadrid, setResultMadrid] = useState({
    score: 0,
    img: "atletico.png",
  });
  const [resultReal, setResultReal] = useState({ score: 0, img: "real.png" });

  //VRIME

  const currentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return ` ${month < 10 ? `0${month}` : `${month}`} / ${date} / ${year}`;
  };

  const [start] = useState(new Date());

  const calcGameTime = () => {
    const time = new Date() - start;

    let min = Math.floor((time / 1000 / 60) << 0);
    let sec = Math.floor((time / 1000) % 60);
    console.log(new Date(), start, time, min, sec);
    // return { min, sec };
  };

  return (
    <div className="App">
      <Display />
      <div>{calcGameTime()}</div>
      <button
        onClick={() => {
          calcGameTime();
        }}
      ></button>
      <B result={resultMadrid} setResult={setResultMadrid} />
      <button
        onClick={() => {
          setResultMadrid({ ...resultMadrid, score: 0 });
          setResultReal({ ...resultReal, score: 0 });
        }}
      >
        RESET
      </button>
      <B result={resultReal} setResult={setResultReal} />
    </div>
  );
}

export default App;
