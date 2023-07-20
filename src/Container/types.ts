export type ScoreResults={ currentTime:{
    min: number;
    sec: number;
}, homeScore:number, awayScore:number }
export type TeamData={
    dataAway :{
      name: string;
      imgSrc: string;
      score: number;
  }
    dataHome:{
      name: string;
      imgSrc: string;
      score: number;
  },}

  export type TeamButtons={
    setScoreHome:(newScore: number) => void,
  
    setScoreAway: (newScore: number) => void,
  
    resetScore:() => void,
  } & TeamData