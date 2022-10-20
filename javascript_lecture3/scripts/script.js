//Task 1

// function reverseText(word) {
//   const REVERSE_WORD = word.split("").reverse().join("");
//   console.log(REVERSE_WORD);
// }

// reverseText("Hello");

//Task 2

// function reverseText(word) {
//   const TEXT = word.toUpperCase();
//   const TEXT1 = word.toUpperCase().split("").reverse();
//   const TEXT2 = TEXT1.join("");
//   if (TEXT == TEXT2) {
//     console.log("The word is a palindrome");
//   } else {
//     console.log("The word is not a palindrome");
//   }
// }

// reverseText("AnNa");

//3

// function reverseNum(num) {
//   let numAbs = Math.abs(num);
//   let numArr = ("" + numAbs).split("").map(Number);
//   let newNum = numArr.reverse().join("");
//   // for (let i = 0; i < numArr.length; i++) {
//   //   if (numArr[i] == 0) {
//   //     numArr = numArr.shift(numArr[i]);
//   //   }
//   // }
//   if (num < 0) {
//     newNum /= -1;
//   } else newNum /= 1;

//   //   console.log(numArr);
//   console.log(newNum);
// }

// reverseNum(-12000);

//4

function cesarPLusThree(word) {
  let alfRu = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  alfRu = alfRu.split("");
  let wordArray = word.split("");
  let length = alfRu.length - 1;
  let newWord = [];
  for (let i = 0; i < wordArray.length; i++) {
    let index = alfRu.indexOf(wordArray[i]);
    let indexCesar = index + 3;
    let letterNew = alfRu[indexCesar];
    if (indexCesar > length) {
      let diff = indexCesar - length;
      let indexNew = diff - 1;
      letterNew = alfRu[indexNew];
    } else letterNew = alfRu[indexCesar];
    newWord.push(letterNew);
  }
  return newWord.join("");
}
console.log(cesarPLusThree("абвэюя"));
