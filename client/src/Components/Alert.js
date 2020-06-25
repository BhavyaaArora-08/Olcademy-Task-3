import React from "react";
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "400px",
    margin: "5px auto",
  },
};

const Alerte = (props) => {
  console.log("hey", props);

  return (
    <div className="alert">
      <Alert
        className={props.classes.root}
        severity={props.alert.type ? props.alert.type : "error"}
      >
        {props.alert.text}
      </Alert>
    </div>
  );
};

export default withStyles(styles)(Alerte);
