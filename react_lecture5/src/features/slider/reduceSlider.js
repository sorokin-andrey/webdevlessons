import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 0,
  urls: [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
  ],
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    next: (state) => {
      if (state.currentSlide >= state.urls.length - 1) {
        state.currentSlide = 0;
      } else {
        state.currentSlide++;
      }
    },
    previous: (state) => {
      if (state.currentSlide <= 0) {
        state.currentSlide = state.urls.length - 1;
      } else {
        state.currentSlide--;
      }
    },
    select: (state, input) => {
      state.currentSlide = Number(input.payload);
    },
  },
});

export const { next, previous, select } = sliderSlice.actions;

export default sliderSlice.reducer;
