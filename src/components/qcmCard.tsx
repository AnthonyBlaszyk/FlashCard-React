import React from "react";
import { GetQcmCard, VerifyQcmCard } from "./getQcmCard";
import { QuestionAnswerType } from "./data";

type propsType = {
  data: QuestionAnswerType[];
};

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const QcmCard = (props: propsType): JSX.Element => {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [submitedAnswer, setSubmitedAnswer] = React.useState(false);
  const [answer, setAnswer] = React.useState("");
  const [answerArray, setAnswerArray] = React.useState([
    props.data[questionNumber].correctAnswer,
    props.data[questionNumber].wrongAnswerOne,
    props.data[questionNumber].wrongAnswerTwo,
    props.data[questionNumber].wrongAnswerThree,
  ]);

  React.useEffect(() => {
    setAnswerArray(
      shuffleArray([
        props.data[questionNumber].correctAnswer,
        props.data[questionNumber].wrongAnswerOne,
        props.data[questionNumber].wrongAnswerTwo,
        props.data[questionNumber].wrongAnswerThree,
      ])
    );
  }, [props.data, questionNumber]);

  return (
    <div className="card container border border-info">
      <div className="logo"></div>
      <h3>{props.data[questionNumber].question}</h3>
      <span className="separate"></span>

      {submitedAnswer ? (
        <VerifyQcmCard
          data={props.data}
          answer={answer}
          setAnswer={setAnswer}
          questionNumber={questionNumber}
          answerArray={answerArray}
        />
      ) : (
        <GetQcmCard
          data={props.data}
          answer={answer}
          setAnswer={setAnswer}
          questionNumber={questionNumber}
          answerArray={answerArray}
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
