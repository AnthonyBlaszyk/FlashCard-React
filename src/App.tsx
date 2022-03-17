import React from "react";
import "./styles/style.css";
import { MentalCard } from "./components/mentalCard";
import { questionsAnswer } from "./components/questionsAnswer";

function App() {
  return <MentalCard data={questionsAnswer} />;
}

export default App;
