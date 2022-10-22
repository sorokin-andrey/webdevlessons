import React from "react";
import styles from "./SliderTop.module.css";

import SliderNavButton from "../sliderNavButton/SliderNavButton";
import SliderImageBox from "../sliderImageBox/SliderImageBox";

function SliderTop() {
  return (
    <div className={styles.slider__top}>
      <SliderNavButton method="previous" />
      <SliderImageBox />
      <SliderNavButton method="next" />
    </div>
  );
}

export default SliderTop;
