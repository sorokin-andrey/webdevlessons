let currentResult = 0;
let currentOperation = "";
let isRefreshed = false;

function click_buttonAC() {
  document.getElementById("result").innerText = "0";
}

function click_number(number) {
  let result = document.getElementById("result");
  let resultValue = result.innerText;

  if (currentOperation == "" || isRefreshed == true) {
    if (resultValue == "0") {
      resultValue = number;
    } else {
      resultValue += number;
    }
    result.innerText = resultValue;
  } else {
    resultValue = number;
    result.innerText = resultValue;
    isRefreshed = true;
  }
}

function click_button0() {
  click_number(0);
}

function click_button1() {
  click_number(1);
}

function click_button2() {
  click_number(2);
}

function click_button3() {
  click_number(3);
}

function click_button4() {
  click_number(4);
}

function click_button5() {
  click_number(5);
}

function click_button6() {
  click_number(6);
}

function click_button7() {
  click_number(7);
}

function click_button8() {
  click_number(8);
}

function click_button9() {
  click_number(9);
}

function click_operation(operation) {
  currentOperation = operation;
  isRefreshed = false;
}

function click_buttonPlus() {
  click_operation("+");
}

function click_buttonMinus() {
  click_operation("-");
}

function click_buttonMultiply() {
  click_operation("*");
}

function click_buttonDivide() {
  click_operation("/");
}

function click_buttonEquals() {
  let result = document.getElementById("result");
  let resultValue = Number(result.innerText);

  let finalResult = 0;
  switch (currentOperation) {
    case "+":
      finalResult = currentResult + resultValue;
      break;
    case "-":
      finalResult = currentResult - resultValue;
      break;
    case "*":
      finalResult = currentResult * resultValue;
      break;
    case "/":
      finalResult = currentResult / resultValue;
      break;
    default:
      break;
  }
  result.innerText = finalResult;
}

document.getElementById("button0").onclick = click_button0;
document.getElementById("button1").onclick = click_button1;
document.getElementById("button2").onclick = click_button2;
document.getElementById("button3").onclick = click_button3;
document.getElementById("button4").onclick = click_button4;
document.getElementById("button5").onclick = click_button5;
document.getElementById("button6").onclick = click_button6;
document.getElementById("button7").onclick = click_button7;
document.getElementById("button8").onclick = click_button8;
document.getElementById("button9").onclick = click_button9;

document.getElementById("buttonAC").onclick = click_buttonAC;
document.getElementById("buttonPlus").onclick = click_buttonPlus;
document.getElementById("buttonMinus").onclick = click_buttonMinus;
document.getElementById("buttonMultiply").onclick = click_buttonMultiply;
document.getElementById("buttonDivision").onclick = click_buttonDivide;
document.getElementById("buttonEquals").onclick = click_buttonEquals;
