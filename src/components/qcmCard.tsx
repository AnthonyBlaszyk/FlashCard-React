import React from "react";
import { GetQcmCard, VerifyQcmCard } from "./getQcmCard";
import { QuestionAnswerType } from "./data";

type propsType = {
  data: QuestionAnswerType[];
};

export const QcmCard = (props: propsType): JSX.Element => {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [submitedAnswer, setSubmitedAnswer] = React.useState(false);
  const [answer, setAnswer] = React.useState("");

  return (
    <div className="card">
      <h3>{props.data[questionNumber].question}</h3>
      {submitedAnswer ? (
        <VerifyQcmCard
          data={props.data}
          answer={answer}
          setAnswer={setAnswer}
          questionNumber={questionNumber}
        />
      ) : (
        <GetQcmCard
          data={props.data}
          answer={answer}
          setAnswer={setAnswer}
          questionNumber={questionNumber}
        />
      )}
      <button
        className="btn btn-outline-info"
        onClick={() => {
          if (submitedAnswer) {
            questionNumber < props.data.length - 1
              ? setQuestionNumber(questionNumber + 1)
              : setQuestionNumber(0);
            setAnswer("");
          }
          setSubmitedAnswer(!submitedAnswer);
        }}
      >
        {submitedAnswer ? "Next question" : "Submit answer"}
      </button>
    </div>
  );
};
