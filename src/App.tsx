import React from "react";
import "./styles/style.css";
import { MentalCard } from "./components/mentalCard";
import { questionsAnswer } from "./components/data";
import { InputCard } from "./components/inputCard";
import { QcmCard } from "./components/qcmCard";

function App() {
  return (
    <div>
      <MentalCard data={questionsAnswer} />
      <InputCard data={questionsAnswer} />
      <QcmCard data={questionsAnswer} />
    </div>
  );
}

export default App;
