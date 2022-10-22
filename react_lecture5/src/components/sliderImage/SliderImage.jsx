import React from "react";
import styles from "./SliderImage.module.css";

import { useSelector } from "react-redux";

function SliderImage({ url = "", index = 0 }) {
  const currentSlide = useSelector((state) => state.slider.currentSlide);

  const imgStyle = {
    transform: `translateX(${100 * (index - currentSlide)}%)`,
  };

  return (
    <img
      src={url}
      alt="image"
      className={styles.slider__images__position}
      style={imgStyle}
    />
  );
}

export default SliderImage;
