import React from "react";

function B({ result, img, setResult }) {
  return (
    <div>
      {result.score}
      <img
        src={result.img}
        alt="Profile"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
        }}
      />
      <button
        onClick={() => {
          setResult({ ...result, score: result.score + 1 });
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          result.score > 0
            ? setResult({ ...result, score: result.score - 1 })
            : null;
        }}
      >
        -
      </button>
    </div>
  );
}

export default B;
