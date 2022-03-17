import React from "react";
import { GetRandomQuestion } from "./getRandomQuestion";

export const MentalCard = (props: any) => {
  const [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * props.data.length)
  );

  return (
    <div className="card container border border-info">
      <GetRandomQuestion data={props.data[randomNumber]} />
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
