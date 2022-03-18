import React from "react";
import { QuestionAnswerType } from "./data";

type propsType = {
  data: QuestionAnswerType[];
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  questionNumber: number;
};

export const GetQcmCard = (props: propsType): JSX.Element => {
  return (
    <div>
      {/* Button 1 */}
      <div className="form-check">
        <input
          onChange={(element) => {
            props.setAnswer(element.target.value);
          }}
          className="form-check-input"
          name="buttonRadio"
          type="radio"
          value={props.data[props.questionNumber].correctAnswer}
        />
        <label className="form-check-label">
          {props.data[props.questionNumber].correctAnswer}
        </label>
      </div>

      {/* Button 2 */}
      <div className="form-check">
        <input
          onChange={(element) => {
            props.setAnswer(element.target.value);
          }}
          className="form-check-input"
          name="buttonRadio"
          type="radio"
          value={props.data[props.questionNumber].wrongAnswerOne}
        />
        <label className="form-check-label">
          {props.data[props.questionNumber].wrongAnswerOne}
        </label>
      </div>

      {/* Button 3 */}
      <div className="form-check disabled">
        <input
          onChange={(element) => {
            props.setAnswer(element.target.value);
          }}
          className="form-check-input"
          name="buttonRadio"
          type="radio"
          value={props.data[props.questionNumber].wrongAnswerTwo}
        />
        <label className="form-check-label">
          {props.data[props.questionNumber].wrongAnswerTwo}
        </label>
      </div>
    </div>
  );
};

export const VerifyQcmCard = (props: propsType): JSX.Element => {
  if (props.answer === props.data[props.questionNumber].correctAnswer) {
    return (
      <div>
        <p>Correct!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Wrong!</p>
      </div>
    );
  }
};
