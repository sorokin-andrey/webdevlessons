import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slider/reduceSlider";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
