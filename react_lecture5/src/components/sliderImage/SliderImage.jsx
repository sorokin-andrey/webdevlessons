import React from "react";
import styles from "./SliderImage.module.css";

import classNames from "classnames";

function SliderImage({ url = "", isActive = false }) {
  const slideImageClass = classNames({
    [styles.slider__images__active]: isActive,
    [styles.slider__images__inactive]: !isActive,
  });

  return <img src={url} alt="image" className={slideImageClass} />;
}

export default SliderImage;
