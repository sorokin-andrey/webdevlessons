import React, { useState } from "react";
import classes from "./Result.module.css";

import { useSelector } from "react-redux";

function Result() {
  const result = useSelector((state) => state.result.resultValue);

  return (
    <div className={classes.result}>
      <div>{result}</div>
    </div>
  );
}

export default Result;
