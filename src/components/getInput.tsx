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
  if (
    props.answer.toLowerCase() ===
    props.data[props.questionNumber].correctAnswer.toLowerCase()
  ) {
    return (
      <div>
        <h2>{props.data[props.questionNumber].question}</h2>
        <p>Correct!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.data[props.questionNumber].question}</h2>
        <p>Wrong!</p>
      </div>
    );
  }
};
