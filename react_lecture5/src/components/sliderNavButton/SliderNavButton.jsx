import React from "react";
import styles from "./SliderNavButton.module.css";

import { useDispatch } from "react-redux";
import { previous, next } from "../../features/slider/reduceSlider";

function SliderNavButton(props) {
  const dispatch = useDispatch();
  const handler =
    props.method == "previous"
      ? () => dispatch(previous())
      : () => dispatch(next());

  return (
    <div className={styles.slider__btn} onClick={() => handler()}>
      <img src="assets/images/arrow-left.png" alt=""></img>
    </div>
  );
}

export default SliderNavButton;
