// 1 задание

// let a = 10;
// let b = 5;
// console.log("S= " + a * b);

// 2 задание

// let x = 20;
// let y = 30;

// if (x > y) {
//   console.log("x > y");
// } else {
//   console.log("x < y");
// }

// 3 задание

// let x = 15;
// let y = 100;
// let test = 120;

// if (test > x && test < y) {
//   console.log(test + " попадает в диапазон между " + x + " и " + y);
// }

// if (test < x || test > y) {
//   console.log(test + " не попадает в диапазон между " + x + " и " + y);
// }

// 4 задание

// let x = 9;
// let y = 3;

// if (x % 2 === 0 && y % 2 === 0) {
//   console.log("Оба четные");
// } else if (x % 2 === 0 && y % 2 === 1) {
//   console.log("1ое четное 2ое нечетное");
// } else if (x % 2 === 1 && y % 2 === 0) {
//   console.log("1ое нечетное 2 четное");
// } else if (x % 2 === 1 && y % 2 === 1) {
//   console.log("Оба нечетные");
// }

// 5 задание

// let x = 7;
// let y = 5;

// if (x < 3) {
//   y *= 3;
//   console.log(y);
// } else if (x >= 3 && x < 7) {
//   y *= 5;
//   console.log(y);
// } else if (x >= 7) {
//   y *= 7;
//   console.log(y);
// }

// 6 задание

// let x = 110;
// let y = 97;
// x = 100 - x;
// y = 100 - y;                                  //нужно добавить модуль
// if (x > y) {
//   console.log("Y closer to 100 then X");
// } else if (x < y) {
//   console.log("X closer to 100 than Y");
// }

// // 7 задание

// let x = 1;
// let y = 2;
// console.log("Both are even " + (x % 2 === 0 && y % 2 === 0));
// console.log("1st is even 2nd is not even " + (x % 2 === 0 && y % 2 === 1));
// console.log("1st is not even 2nd is even " + (x % 2 === 1 && y % 2 === 0));
// console.log("Both are not even " + (x % 2 === 1 && y % 2 === 1));

// 8 задание

// let i = 0;

// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// // 9 задание
// let sum=0
// for (i = 0; i <= 10; i++) {
// sum+=i
  
// }
// console.log(sum);


// // 10 - неправильно сделал

// let x = 20;

// for (i = 3; i <= 10; i += 3) {
//   console.log(x - i);
// }

// // 11 задание

// for (i = 0; i <= 100; i++) {  //Можно ли добавлять к условиям еще?
//   if (i % 2 === 0) console.log(i + " -четное");
//   else if (i % 2 === 1) console.log(i + " -нечетное");
// }

// // 12 задание

// let i = 0;
// while (i <= 100) {
//   // Узнать, как бы это выглядело в while
//   i++;
//   if (i % 6 === 0) continue;
//   if (i % 3 === 0) console.log(i);
//   if (i % 5 === 0) console.log(i);
// }

// 12 задание

for (i = 1; i <= 100; i++) {
  if (i % 6 === 0) continue;                   //узнать, чтобы не повторялось
  if (i % 3 === 0) console.log(i);
  if (i % 5 === 0) console.log(i);
}
