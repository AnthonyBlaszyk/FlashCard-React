import React from "react";
import { GetRandomQuestion } from "./getRandomQuestion";

export const MentalCard = (props: any) => {
  const [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * props.data.length)
  );

  return (
    <div>
      {/* TEST USE EFFECT */}
      <div className="card container border border-info">
        {React.useEffect((): any => {
          <div>
            <h1>Hello</h1>
            {console.log(props.data)}
            <GetRandomQuestion
              data={props.data[randomNumber]}
              displayAnswer={false}
            />
          </div>;
        }, [randomNumber])}
        <button
          className="btn btn-outline-info"
          onClick={() =>
            setRandomNumber(Math.floor(Math.random() * props.data.length))
          }
        >
          Next Question
        </button>
      </div>

      {/* SANS LE USE EFFECT */}
      <div className="card container border border-info">
        <GetRandomQuestion
          data={props.data[randomNumber]}
          displayAnswer={false}
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
