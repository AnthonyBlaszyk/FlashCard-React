import React from "react";
import { QuestionAnswerType } from "./data";

type propsType = {
  data: QuestionAnswerType[];
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  questionNumber: number;
};

export const GetInput = (props: propsType): JSX.Element => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          {props.data[props.questionNumber].question}
        </label>
        <input
          onChange={(element) => props.setAnswer(element.target.value)}
          className="form-control"
          placeholder="Enter your answer"
          value={props.answer}
        />
      </div>
    </form>
  );
};

export const VerifyInput = (props: propsType): JSX.Element => {
  console.log(props.answer);
  if (props.answer === props.data[props.questionNumber].correctAnswer) {
    return (
      <div>
        <h2>Correct</h2>
      </div>
    );
  } else {
    return <div>Wrong</div>;
  }
};
