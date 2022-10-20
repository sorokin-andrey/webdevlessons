import React, { useState } from "react";
import classes from "./Result.module.css";

function Result() {
  

  return (
    <div className={classes.result}>
      <div>{result}</div>
    </div>
  );
}

export default Result;
