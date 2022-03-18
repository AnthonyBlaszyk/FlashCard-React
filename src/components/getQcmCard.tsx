import React from "react";
import { QuestionAnswerType } from "./data";

type propsType = {
  data: QuestionAnswerType[];
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  questionNumber: number;
  answerArray: string[];
};

export const GetQcmCard = (props: propsType): JSX.Element => {
  return (
    <>
      {props.answerArray.map((answer) => {
        return (
          <div key={answer}>
            {/* Button 1 */}
            <div className="form-check">
              <input
                onChange={(element) => {
                  props.setAnswer(element.target.value);
                }}
                className="form-check-input"
                name="buttonRadio"
                type="radio"
                value={answer}
              />
              <label className="form-check-label">{answer}</label>
            </div>
          </div>
        );
      })}
    </>
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
