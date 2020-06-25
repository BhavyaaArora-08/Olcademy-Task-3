import React from "react";
// import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Alert from "./Components/Alert";
import axios from "axios";
import "./Styles/styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      questions: [],
      alert: "",
      score: 0,
      showResult: false,
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/questions");
    this.setState({ questions: res.data.questions });
  }
  handleChange = (stateUpdate) => {
    this.setState({ ...stateUpdate });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <Quiz
                  {...props}
                  handleChange={this.handleChange}
                  questions={this.state.questions}
                  showResult={this.state.showResult}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
