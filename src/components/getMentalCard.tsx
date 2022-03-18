import React from "react";
import { QuestionAnswerType } from "./data";

type typeProps = {
  data: QuestionAnswerType;
  randomNumber: number;
};

export const GetRandomQuestion = (props: typeProps) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  React.useEffect(() => {
    setShowAnswer(false);
  }, [props.randomNumber]);

  return (
    <>
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
