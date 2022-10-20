// //1
// const a = 5;
// const b = 9;
// console.log(a * b);

// //2
// const c = 87;
// const d = 47;
// if (c > d) {
//   console.log("variable c bigger than d");
// } else if (c < d) {
//   console.log("variable c less than d");
// }

// //3
// const e = 1;
// const f = 20;
// const g = 1;
// if (g >= e && g <= f) {
//   console.log("variable g is between" + 1 + "and" + 20);
// } else if (g < e || g > f) {
//   console.log("variable g is't between" + 1 + "and" + 20);
// }

// //4
// const isNumber = function (isNumber) {
//   return isNumber % 2 == 0 ? true : false;
// };
// // console.log(isNumber(3));
// // console.log(isNumber(56));

// const p = 3;
// const z = 56;
// // if (p % 2 == 0 && z % 2 == 0) {
// //   console.log("Both variables are even");
// // } else if (p % 2 !== 0 && z % 2 == 0) {
// //   console.log("First variable is not even and second is even");
// // } else if (p % 2 == 0 && z % 2 !== 0) {
// //   console.log("First variable is even and second is not even");
// // } else {
// //   console.log("Both variables are not even");
// // }

// if (isNumber(p) && isNumber(z)) {
//   console.log("Both variables are even");
// } else if (isNumber(p) && !isNumber(z)) {
//   console.log("First variable is not even and second is even");
// } else if (!isNumber(p) && isNumber(z)) {
//   console.log("First variable is even and second is not even");
// } else {
//   console.log("Both variables are not even");
// }

// //5
// const i = 7;
// const j = 23;
// if (i < 3) {
//   console.log(j * 3);
// } else if (i >= 3 && i < 7) {
//   console.log(j * 5);
// } else if (i >= 7) {
//   console.log(j * 7);
// }

// //6
// const k = 13; // nihrena ne ponimayu
// const l = 87;
// if (100 - Math.abs(k) > 100 - Math.abs(l)) {
//   console.log("l is closer to 100");
// } else if (l00 - Math.abs(k) < 100 - Math.abs(l)) {
//   console.log("k is closer to 100");
// } else {
//   console.log("k is equal to l");
// }

// //7
// const m = -18434; // why does it shows as an error once it become positive?
// const n = 328457674;
// if (m >= 0) {
//   consonle.log(true);
// } else if (m < 0) {
//   console.log(false);
// }
// if (n >= 0) {
//   console.log(true);
// } else if (n < 0) {
//   console.log(false);
// }

// // const o = function (o) {
// //   return o >= 0 ? true : false;
// // };
// // console.log(o(-7));
// // console.log(o(22));

// //8
// let x = 1;
// while (x <= 100) {
//   console.log("x=" + x);
//   x++;
// }

// //9
// var sum = 0;
// for (var x1 = 0; x1 <= 10; x1++) {
//   sum += x1;
// }
// console.log(sum);

// //10
// // var x2 = 37;
// // for (var x3 = 0; x3 < 10; x3 += 3) {
// //   x2 -= x3;
// // }
// // console.log(x2);

// var x2 = 37;
// for (var x3 = 0; x3 < 10; x3++) {
//   if (x3 % 3 == 0) {
//     x2 -= x3;
//   }
// }
// console.log(x2);

// //11
// let y = 0;
// for (y = 0; y < 100; y++) {
//   if (y % 2 == 0) {
//     console.log("y is even: " + y);
//   } else {
//     console.log("y is not even: " + y);
//   }
// }

// //12
// // for (let i = 0; i < 100; i++) {
// //   if (i % 3 == 0 && i % 6 != 0) {
// //     console.log("i = " + i);
// //   } else if (i % 5 == 0 && i % 6 != 0) {
// //     console.log("i = " + i);
// //   }
// // }

// for (let i = 0; i < 100; i++) {
//   if ((i % 3 == 0 || i % 5 == 0) && i % 6 != 0) {
//     console.log("i = " + i);
//   }
// }

///2

//1
function Reverse(text) {
  let i;
  i = text.split("");
  i.reverse("");
  let newText;
  newText = i.join("");
  console.log(newText);
}
Reverse("finally");
//2
let y = function Word(pland) {
  pland = pland.toUpperCase("");
  return pland === pland.split("").reverse().join("") ? true : false;
};
console.log(y("Анна"));

//3
// function ReverseNum(Num) {
//   Num = Num + "";
//   return Num.split("").reverse().join("");
// }
// console.log(ReverseNum(1870000));

var num = 167;
function Rvrs(num) {
  let result = 0;
  while (num) {
    // 1
    result = result * 10 + (num % 10); // 761
    num = Math.floor(num / 10);
  }
  return result;
}
console.log(Rvrs(num));

//4
var alp;
