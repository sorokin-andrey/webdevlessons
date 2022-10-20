import React from "react";
import styles from "./SliderImageBox.module.css";

import { useSelector } from "react-redux";

import SliderImage from "../sliderImage/SliderImage";

function SliderImageBox() {
  const currentSlide = useSelector((state) => state.slider.currentSlide);
  // const currentUrl = useSelector((state) => state.slider.urls[currentSlide]);

  const images = useSelector((state) => state.slider.urls).map((url, index) => (
    <SliderImage url={url} isActive={currentSlide == index} />
  ));

  // const images = <SliderImage url={currentUrl} isActive={true} />;

  return <div className={styles.slider__img}>{images}</div>;
}

export default SliderImageBox;
