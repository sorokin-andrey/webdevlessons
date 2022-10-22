import React from "react";
import styles from "./SliderImageBox.module.css";

import { useSelector } from "react-redux";

import SliderImage from "../sliderImage/SliderImage";

function SliderImageBox() {
  const images = useSelector((state) => state.slider.urls).map((url, index) => (
    <SliderImage url={url} index={index} key={index} />
  ));

  return <div className={styles.slider__img}>{images}</div>;
}

export default SliderImageBox;
