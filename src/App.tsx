import React from "react";
import "./styles/style.css";
import { MentalCard } from "./components/mentalCard";
import { questionsAnswer } from "./components/data";
import { InputCard } from "./components/inputCard";
import { QcmCard } from "./components/qcmCard";

function App() {
  const [card, setCard] = React.useState(<MentalCard data={questionsAnswer} />);
  const cardArray = [
    {
      value: <MentalCard data={questionsAnswer} />,
      name: "Mental Card",
    },
    {
      value: <InputCard data={questionsAnswer} />,
      name: "Input Card",
    },
    {
      value: <QcmCard data={questionsAnswer} />,
      name: "QCM Card",
    },
  ];

  return (
    <div>
      <ul>
        {cardArray.map((element) => {
          return (
            <li>
              <button onClick={() => setCard(element.value)}>
                {element.name}
              </button>
            </li>
          );
        })}
      </ul>
      {card}
    </div>
  );
}

export default App;
