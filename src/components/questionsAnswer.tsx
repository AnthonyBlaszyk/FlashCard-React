type QuestionAnswer = {
  id: number;
  question: string;
  correctAnswer: string;
  wrongAnswerOne: string;
  wrongAnswerTwo: string;
  wrongAnswerThree: string;
};

export const questionsAnswer: QuestionAnswer[] = [
  {
    id: 1,
    question: "Question #1",
    correctAnswer: "Correct Answer #1",
    wrongAnswerOne: "Wrong Answer #1-1",
    wrongAnswerTwo: "Wrong Answer #1-2",
    wrongAnswerThree: "Wrong Answer #1-3",
  },
  {
    id: 2,
    question: "Question #2",
    correctAnswer: "Correct Answer #2",
    wrongAnswerOne: "Wrong Answer #2-1",
    wrongAnswerTwo: "Wrong Answer #2-2",
    wrongAnswerThree: "Wrong Answer #2-3",
  },
  {
    id: 3,
    question: "Question #3",
    correctAnswer: "Correct Answer #3",
    wrongAnswerOne: "Wrong Answer #3-1",
    wrongAnswerTwo: "Wrong Answer #3-2",
    wrongAnswerThree: "Wrong Answer #3-3",
  },
  {
    id: 4,
    question: "Question #4",
    correctAnswer: "Correct Answer #4",
    wrongAnswerOne: "Wrong Answer #4-1",
    wrongAnswerTwo: "Wrong Answer #4-2",
    wrongAnswerThree: "Wrong Answer #4-3",
  },
];
