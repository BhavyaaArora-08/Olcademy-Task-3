import React from "react";

const QuizCard = (props) => {
  const {
    option1,
    option2,
    option3,
    option4,
    question,
    qno,
    answer,
    showResult,
  } = props;
  return (
    <form className="form login">
      <p>{question}</p>
      <label htmlFor="option1">{option1}</label>
      <input type="radio" name="option1" value="option1" />
      <br />
      <label htmlFor="option2">{option2}</label>
      <input type="radio" name="option2" value="option2" />
      <br />
      <label htmlFor="option3">{option3}</label>
      <input type="radio" name="option3" value="option3" />
      <br />
      <label htmlFor="option4">{option4}</label>
      <input type="radio" name="option4" value="option4" />
    </form>
  );
};

export default QuizCard;
