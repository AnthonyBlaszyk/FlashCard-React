import React from "react";
import { QuestionAnswerType } from "./data";
import { GetInput, VerifyInput } from "./getInput";

type propsType = {
  data: QuestionAnswerType[];
};

export const InputCard = (props: propsType): JSX.Element => {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [submitedAnswer, setSubmitedAnswer] = React.useState(false);
  const [answer, setAnswer] = React.useState("");

  return (
    <div className="card">
      {submitedAnswer ? (
        <VerifyInput
          data={props.data}
          answer={answer}
          setAnswer={setAnswer}
          questionNumber={questionNumber}
        />
      ) : (
        <GetInput
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
