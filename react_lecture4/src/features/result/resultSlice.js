import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentResult: 0,
  resultValue: "0",
  currentOperation: "",
  isRefreshed: false,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    input: (state, input) => {
      const inputNumber = input.payload;
      if (state.currentOperation == "" || state.isRefreshed == true) {
        if (state.resultValue == "0") {
          state.resultValue = inputNumber;
        } else {
          state.resultValue += inputNumber;
        }
      } else {
        state.resultValue = inputNumber;
        state.isRefreshed = true;
      }
    },
    plus: (state, input) => {
      const operation = input.payload;
      state.currentOperation = operation;
      state.isRefreshed = false;
      state.currentResult = Number(state.resultValue);
    },
    minus: (state, input) => {
      const operation = input.payload;
      state.currentOperation = operation;
      state.isRefreshed = false;
      state.currentResult = Number(state.resultValue);
    },
    multiply: (state, input) => {
      const operation = input.payload;
      state.currentOperation = operation;
      state.isRefreshed = false;
      state.currentResult = Number(state.resultValue);
    },
    devide: (state, input) => {
      const operation = input.payload;
      state.currentOperation = operation;
      state.isRefreshed = false;
      state.currentResult = Number(state.resultValue);
    },
    clean: (state) => {
      state.resultValue = 0;
    },
    equal: (state) => {
      const result = state.resultValue;
      const resultValue = Number(result);

      let finalResult = 0;
      switch (state.currentOperation) {
        case "+":
          finalResult = state.currentResult + resultValue;
          break;
        case "-":
          finalResult = state.currentResult - resultValue;
          break;
        case "*":
          finalResult = state.currentResult * resultValue;
          break;
        case "/":
          finalResult = state.currentResult / resultValue;
          break;
        default:
          break;
      }
      console.log(finalResult);
      state.resultValue = finalResult;
    },
  },
});

export const { input, plus, minus, multiply, devide, clean, equal } =
  resultSlice.actions;

export default resultSlice.reducer;
