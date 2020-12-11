import React from "react";
import "./welcome.css";
import Button from "@material-ui/core/Button";

function Welcome(props) {
    const handleHome=()=>{
        props.history.push("/");
    }
    const handleLogin=()=>{
        props.history.push("/signin");
    }
  return (
    <div className="container">
      <div className="organization-name">
        <h1>ExperTrons</h1>
        <p>Inspire Success</p>
      </div>
      <div className="navigation">
        <Button onClick={handleHome}>HOME</Button>
        <Button variant="outlined" color="primary" onClick={handleLogin}>
          LogIn
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
