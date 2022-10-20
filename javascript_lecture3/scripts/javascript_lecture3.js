// Document Object Model (DOM)

// DOM Tree

// Dom manipulation (selectors, style and structure)
// getElementById

function changeColor(htmlElement) {
  console.log(htmlElement);
  htmlElement.style.backgroundColor = "red";
}

function minus() {
  let counterResult = document.getElementById("counter_result");
  console.log(counterResult);
  let counterResultValue = counterResult.innerText;
  console.log(counterResultValue);
  counterResultValue--;
  counterResult.innerText = counterResultValue;
}

function plus() {
  let counterResult = document.getElementById("counter_result");
  console.log(counterResult);
  let counterResultValue = counterResult.innerText;
  console.log(counterResultValue);
  counterResultValue++;
  counterResult.innerText = counterResultValue;
}

// getElementByClassName
function changeColumsBackgroundColor() {
  let listItem = document.getElementsByClassName("column");
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].style.backgroundColor == "gray") {
      listItem[i].style.backgroundColor = "#cfcfcf";
    } else {
      listItem[i].style.backgroundColor = "gray";
    }
  }
}

function printColumn(column) {
  console.log(column.innerText);
}

let tableButton = document.getElementById("table_button");
tableButton.onclick = changeColumsBackgroundColor;

let listItem = document.getElementsByClassName("column");
for (let i = 0; i < listItem.length; i++) {
  listItem[i].setAttribute("onclick", "printColumn(this)");
}

// getElementByTagName
function mouseOverLi(li) {
  li.innerText += " Mouse over";
}
function mouseOutLi(li) {
  li.innerText = li.innerText.slice(0, li.innerText.length - 11);
}

let allLiElements = document.getElementsByTagName("li");
for (let i = 0; i < allLiElements.length; i++) {
  allLiElements[i].setAttribute("onmouseover", "mouseOverLi(this)");
  allLiElements[i].setAttribute("onmouseout", "mouseOutLi(this)");
}

// querySelector
let elByClass = document.querySelector(".column");
let elById = document.querySelector("#myId");
console.log(elByClass);

// querySelectorAll
let allElByClass = document.querySelectorAll(".myclass");
let allElByTag = document.querySelectorAll("div");

// on load
// window.onload = function () {
//   document.getElementById("body").style.backgroundColor = "red";
// };

// on input
let textInput = document.getElementById("textInputExample");
textInput.oninput = function () {
  this.value = this.value.toUpperCase();
};

// clocks
// function updateClocks(hour, min, sec) {
//   var date = new Date();
//   hour.innerText = date.getHours();
//   min.innerText = date.getMinutes();
//   sec.innerText = date.getSeconds();
// }

// let hour = document.getElementById("clocksHours");
// let min = document.getElementById("clocksMinutes");
// let sec = document.getElementById("clocksSeconds");
// let timer = setInterval(() => updateClocks(hour, min, sec), 1000);
// // sec.innerText = parseInt(sec.inner~Text) + 1;

function updateClock() {
  let hour = document.getElementById("clocksHours");
  let min = document.getElementById("clocksMinutes");
  let sec = document.getElementById("clocksSeconds");

  let currentSec = parseInt(sec.innerText);
  if (currentSec < 60) {
    sec.innerText = currentSec + 1;
  } else {
    sec.innerText = 0;
    let currentMin = parseInt(min.innerText);
    if (currentMin < 60) {
      min.innerText = currentMin + 1;
    } else {
      min.innerText = 0;
      let currentHour = parseInt(hour.innerText);
      if (currentHour < 60) {
        hour.innerText = currentHour + 1;
      } else {
        hour.innerText = 0;
      }
    }
  }
}

let timer = setInterval(() => updateClock(), 100);

function deleteClock() {
  let clocks = document.getElementsByClassName("clocks")[0];
  clearInterval(timer);
  clocks.remove();
}

let deleteClockButton = document.getElementById("deleteClock");
deleteClockButton.onclick = deleteClock;

function calculateSum() {
  for (let i = 1; i < 10; i += 2) {
    console.log(i);
  }
}

calculateSum();
