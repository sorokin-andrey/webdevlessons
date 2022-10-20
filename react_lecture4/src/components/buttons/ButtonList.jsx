import React, { useState } from "react";
import Button from "../button/Button";
import classes from "./ButtonList.module.css";

function ButtonList(props) {
  const [buttons, setButtons] = useState([
    { id: "buttonAC", value: "AC" },
    { id: "buttonPlusMinus", value: "+/-" },
    { id: "buttonPercentage", value: "%" },
    { id: "buttonMultiply", value: "*", className: [classes.buttons__actions] },

    { id: "button7", value: 7 },
    { id: "button8", value: 8 },
    { id: "button9", value: 9 },

    { id: "buttonDivision", value: "/", className: [classes.buttons__actions] },

    { id: "button4", value: 4 },
    { id: "button5", value: 5 },
    { id: "button6", value: 6 },

    { id: "buttonPlus", value: "+", className: [classes.buttons__actions] },

    { id: "button1", value: 1 },
    { id: "button2", value: 2 },
    { id: "button3", value: 3 },

    { id: "buttonMinus", value: "-", className: [classes.buttons__actions] },

    { id: "button0", value: 0, className: [classes.button__zero] },
    {
      id: "buttonEquals",
      value: "=",
      className: [classes.buttons__actions, classes.button__equal],
    },
  ]);

  return (
    <div className={classes.buttons}>
      {buttons.map((button) => {
        return <Button info={button} key={button.id} />;
      })}
    </div>
  );
}

export default ButtonList;
