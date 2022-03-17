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
    <div>
      <div className="card container border border-info">
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
    </div>
  );
};
