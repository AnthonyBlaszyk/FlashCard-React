import React from "react";

export const GetRandomQuestion = (props: any) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <>
      <h3>{props.data.question}</h3>
      {showAnswer ? (
        <p className="showAnswer">{props.data.correctAnswer}</p>
      ) : (
        <p className="hideAnswer">{props.data.correctAnswer}</p>
      )}
      <button
        className="btn btn-outline-info"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </>
  );
};
