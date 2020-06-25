import React from "react";
import QuizCard from "./QuizCard";

const Quiz = (props) => {
  const { questions } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    props.handleChange({ showResult: true });
    return false;
  };

  return (
    <div className="containere">
      <h1 style={{ textAlign: "center", color: "white" }}>Take the Quiz!</h1>
      {questions.length === 0 && (
        <div className="form login">
          <h1 style={{ textAlign: "center", marginTop: "65px" }}>Loading...</h1>
        </div>
      )}
      <div>
        {questions.map((question) => (
          <QuizCard
            key={question.qno}
            qno={question.qno}
            question={question.question}
            option1={question.option1}
            option2={question.option2}
            option3={question.option3}
            option4={question.option4}
            answer={question.answer}
            showResult={props.showResult}
          />
        ))}
      </div>
      <form
        onSubmit={onSubmit}
        style={{ textAlign: "center", padding: "20px" }}
      >
        <button
          style={{ margin: "0 10px" }}
          type="submit"
          className="btn btn-danger"
        >
          <h4>Submit</h4>
        </button>
        <button onClick="window.location.reload();" className="btn btn-danger">
          <h4>Take the test Again</h4>
        </button>
      </form>
    </div>
  );
};

export default Quiz;
