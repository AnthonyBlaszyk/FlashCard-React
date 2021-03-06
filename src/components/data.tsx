export type QuestionAnswerType = {
  id: number;
  question: string;
  correctAnswer: string;
  wrongAnswerOne: string;
  wrongAnswerTwo: string;
  wrongAnswerThree: string;
};

export const questionsAnswer: QuestionAnswerType[] = [
  {
    id: 1,
    question: "What's the name of the main character of the game Celeste ?",
    correctAnswer: "Madeline",
    wrongAnswerOne: "Celeste",
    wrongAnswerTwo: "Theo",
    wrongAnswerThree: "Oshiro",
  },
  {
    id: 2,
    question: "How many chapters are in the game ?",
    correctAnswer: "9",
    wrongAnswerOne: "8",
    wrongAnswerTwo: "10",
    wrongAnswerThree: "7",
  },
  {
    id: 3,
    question: "What's name the fanbase gave to the alter ego of Madeline ?",
    correctAnswer: "Badeline",
    wrongAnswerOne: "Darkeline",
    wrongAnswerTwo: "Shadowline",
    wrongAnswerThree: "Eviline",
  },
  {
    id: 4,
    question: "How do you unlock b-side on each chapter ?",
    correctAnswer: "Find the music tape",
    wrongAnswerOne: "Collect all the strawberries",
    wrongAnswerTwo: "Find the crystal heart",
    wrongAnswerThree: "Completing the level with a time limit",
  },
];
