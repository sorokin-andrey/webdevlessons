import React from "react";
import styles from "./Main.module.css";

import SliderTop from "../components/sliderTop/SliderTop";
import SliderBottom from "../components/sliderBottom/SliderBottom";

function Main() {
  return (
    <div className={styles.slider}>
      <SliderTop />
      <SliderBottom />
    </div>
  );
}

export default Main;
