import React from "react";
import QuizCard from "./QuizCard";
import Alert from "../Components/Alert";

const Quiz = () => {
  return (
    <div className="containere">
      <h1 style={{ textAlign: "center", color: "white" }}>Take the Quiz!</h1>
      <div>
        <QuizCard
          question="heyeyeye"
          option1="hey"
          option2="hey"
          option3="hey"
          option4="hey"
        />
        <Alert />
        <QuizCard question="heyeyeye" />
        <QuizCard question="heyeyeye" />
        <QuizCard question="heyeyeye" />
        <QuizCard question="heyeyeye" />
      </div>

      <form style={{ textAlign: "center", padding: "20px" }}>
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
