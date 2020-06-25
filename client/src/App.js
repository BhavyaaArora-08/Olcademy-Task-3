import React from "react";
// import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Alert from "./Components/Alert";
import Result from "./Components/Result.js";
import axios from "axios";
import "./Styles/styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      questions: [],
      alerts: [],
      score: 0,
      showResult: false,
    };
  }

  async componentDidMount() {
    const questions = await axios.get("/api/questions");
    this.setState({ questions });
  }
  handleChange = (stateUpdate) => {
    this.setState({ ...stateUpdate });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Alert alerts={this.state.alerts} />
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <Quiz {...props} handleChange={this.handleChange} />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <Result {...props} handleChange={this.handleChange} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
