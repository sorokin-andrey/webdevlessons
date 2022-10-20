import React from "react";
import styles from "./SliderDots.module.css";

import classNames from "classnames";

import { useSelector, useDispatch } from "react-redux";
import { select } from "../../features/slider/reduceSlider";

function SliderDots({ value = 0 }) {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state.slider.currentSlide);

  let sliderDotClass = classNames(
    { [styles.slider__dots]: true },
    { [styles.slider__dots__active]: currentSlide == value }
  );

  return (
    <button className={sliderDotClass} onClick={() => dispatch(select(value))}>
      {value + 1}
    </button>
  );
}

export default SliderDots;
