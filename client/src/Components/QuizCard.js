import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Alert from "./Alert";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
    padding: 7,
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const QuizCard = (props) => {
  const [userAnswer, changeAnswer] = useState("5");
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

  // text: "", type: ""

  let alert = {};
  if (answer == userAnswer) {
    alert = { type: "success", text: "Correct Answer!" };
  } else {
    alert = { type: "error", text: "Wrong Answer! Make another choice" };
  }

  const onChange = (e) => {
    changeAnswer(e.target.value);
  };
  return (
    <div>
      <form className="form login">
        <h5
          style={{ marginBottom: "20px", color: "green" }}
          className="question"
        >
          {question}
        </h5>
        <div className="quizOption" style={{ position: "relative" }}>
          <label htmlFor="option1">{option1}</label>
          <GreenRadio
            checked={userAnswer === "1"}
            onChange={onChange}
            style={{ position: "absolute", right: "0" }}
            name="option"
            value="1"
          />
        </div>
        <div className="quizOption" style={{ position: "relative" }}>
          <label htmlFor="option2">{option2}</label>
          <GreenRadio
            checked={userAnswer === "2"}
            onChange={onChange}
            style={{ position: "absolute", right: "0" }}
            name="option"
            value="2"
          />
        </div>
        <div className="quizOption" style={{ position: "relative" }}>
          <label htmlFor="option3">{option3}</label>
          <GreenRadio
            checked={userAnswer === "3"}
            onChange={onChange}
            style={{ position: "absolute", right: "0" }}
            name="option"
            value="3"
          />
        </div>
        <div className="quizOption" style={{ position: "relative" }}>
          <label htmlFor="option4">{option4}</label>
          <GreenRadio
            checked={userAnswer === "4"}
            onChange={onChange}
            style={{ position: "absolute", right: "0" }}
            name="option"
            value="4"
          />
        </div>
      </form>
      {showResult && <Alert alert={alert} />}
    </div>
  );
};

export default QuizCard;
