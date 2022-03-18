import React from "react";
import { GetRandomQuestion } from "./getMentalCard";
import { QuestionAnswerType } from "./data";

type propsType = {
  data: QuestionAnswerType[];
};

export const MentalCard = (props: propsType) => {
  const [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * props.data.length)
  );

  return (
    <div className="card container border border-info text-info">
      <h3>{props.data[randomNumber].question}</h3>
      <span className="separate"></span>

      <GetRandomQuestion
        data={props.data[randomNumber]}
        randomNumber={randomNumber}
      />
      <button
        className="btn btn-outline-info"
        onClick={() =>
          setRandomNumber(Math.floor(Math.random() * props.data.length))
        }
      >
        Next Question
      </button>
    </div>
  );
};
