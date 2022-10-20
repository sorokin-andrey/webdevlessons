import React, { useState } from "react";
import "./Button.module.css";

function Button(props) {
  return (
    <div id={props.info.id} className={props.info.className}>
      {props.info.value}
    </div>
  );
}

export default Button;
