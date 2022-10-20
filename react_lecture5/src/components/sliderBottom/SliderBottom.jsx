import React from "react";
import styles from "./SliderBottom.module.css";

import { useSelector, useDispatch } from "react-redux";
import { select } from "../../features/slider/reduceSlider";

import SliderDots from "../sliderDots/SliderDots";

function SliderBottom() {
  const dispatch = useDispatch();

  const buttons = useSelector((state) => state.slider.urls).map(
    (element, index) => (
      <SliderDots
        key={index}
        value={index}
        onClick={() => dispatch(select({ index }))}
      />
    )
  );

  return <div className={styles.slider__bottom}>{buttons}</div>;
}

export default SliderBottom;
