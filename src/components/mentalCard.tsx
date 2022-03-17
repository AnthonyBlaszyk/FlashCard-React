type QuestionAnswer = {
  id: number;
  question: string;
  correctAnswer: string;
  wrongAnswerOne: string;
  wrongAnswerTwo: string;
  wrongAnswerThree: string;
};

export const MentalCard = (props: any) => {
  return (
    <div>
      {console.log(props.data)}
      {props.data.map((element: QuestionAnswer) => {
        return (
          <div key={element.id}>
            <p>{element.question}</p>
            <p>{element.correctAnswer}</p>
          </div>
        );
      })}
    </div>
  );
};
