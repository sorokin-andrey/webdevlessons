import React, { useState } from "react";
import "./Button.module.css";

import { useDispatch } from "react-redux";
import {
  input,
  plus,
  minus,
  multiply,
  devide,
  clean,
  equal,
} from "../../features/result/resultSlice";

function Button(props) {
  const dispatch = useDispatch();

  function click_helper(elementId, elementValue) {
    switch (elementId) {
      case "buttonAC":
        click_clean();
        break;
      case "buttonPlusMinus":
        break;
      case "buttonPercentage":
        break;
      case "buttonMultiply":
        click_multiply(elementValue);
        break;
      case "buttonDivision":
        click_devide(elementValue);
        break;
      case "buttonPlus":
        click_plus(elementValue);
        break;
      case "buttonMinus":
        click_minus(elementValue);
        break;
      case "buttonEquals":
        click_equal();
        break;
      default:
        click_number(elementValue);
        break;
    }
  }

  function click_number(value) {
    dispatch(input(value));
  }

  function click_plus(value) {
    dispatch(plus(value));
  }

  function click_minus(value) {
    dispatch(minus(value));
  }

  function click_multiply(value) {
    dispatch(multiply(value));
  }

  function click_devide(value) {
    dispatch(devide(value));
  }

  function click_clean() {
    dispatch(clean());
  }

  function click_equal() {
    dispatch(equal());
  }

  return (
    <div
      id={props.info.id}
      className={props.info.className}
      onClick={(e) => click_helper(e.target.id, e.target.innerText)}
    >
      {props.info.value}
    </div>
  );
}

export default Button;
