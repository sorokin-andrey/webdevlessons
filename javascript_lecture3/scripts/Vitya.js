// let v = true;
// while (v === true) {
//   let S = Number(prompt("Задание 1. Введите длину строки"));
//   function randomString(n) {
//     let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let str = "";
//     for (let i = 0; i < n; i++) {
//       let k = a[Math.floor(Math.random() * a.length)];
//       str += k;
//     }
//     console.log(str);
//   }
//   randomString(S);
//   v = confirm("Попробуем ввести другоезначение?");
// }
// v = true;

// while (v === true) {
//   let S = prompt("Задание 2. Введите слово");
//   function sortString(N) {
//     let arr = N.split("");
//     let b = "";
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[i]) {
//           b = arr[j];
//           arr[j] = arr[i];
//           arr[i] = b;
//         }
//       }
//     }
//     return arr.join("");
//   }
//   alert(sortString(S));
//   v = confirm("Попробуем ввести другоезначение?");
// }

// v = true;
// while (v === true) {
//   let S = prompt("Задание 3. Введите предложение");
//   function BigString(N) {
//     let arr = N.split("");
//     arr[0] = arr[0].toUpperCase();
//     for (i = 1; i < arr.length - 1; i++) {
//       if (arr[i] === " ") {
//         arr[i + 1] = arr[i + 1].toUpperCase();
//       }
//     }
//     return arr.join("");
//   }
//   alert(BigString(S));
//   v = confirm("Попробуем ввести другоезначение?");
// }

// v = true;
// while (v === true) {
//   let S = Number(prompt("Задание 4. Введите число"));
//   function Matrix(X) {
//     let a = "";
//     for (let i = 0; i < X; i++) {
//       for (let j = 0; j < X; j++) {
//         a += Math.floor(Math.random() * 10) + " ";
//       }
//       a += "\n";
//     }
//     alert(a);
//   }
//   Matrix(S);
//   v = confirm("Попробуем ввести другоезначение?");
// }

// v = true;
// while (v === true) {
//   let S = Number(prompt("Задание 5. Введите количество чисел в массиве"));
//   let array = [];
//   for (i = 0; i < S; i++) {
//     array[i] = Number(prompt("Введите " + (i + 1) + " число"));
//   }
//   function sumMinMax(X) {
//     let min = 0;
//     let max = 0;
//     for (i = 0; i < X.length; i++) {
//       if (X[i] < min) {
//         min = X[i];
//       }
//       if (X[i] > max) {
//         max = X[i];
//       }
//     }

//     alert(
//       "Ваш массив:\n" +
//         X +
//         "\nmin = " +
//         min +
//         "\nmax = " +
//         max +
//         "\nsum = " +
//         (min + max)
//     );
//   }
//   sumMinMax(array);

//   v = confirm("Попробуем ввести другоезначение?");
// }

// v = true;
// while (v === true) {
//   let S = Number(prompt("Задание 8. Введите сторону квадрата"));
//   function Square(X) {
//     let a = "";
//     for (let i = 1; i <= X; i++) {
//       a += "#";
//     }
//     let c = a;
//     if (X > 2) {
//       let b = "#";
//       for (let i = 1; i < X - 1; i++) {
//         b += " ";
//       }
//       b += "#";
//       for (let i = 1; i < X - 1; i++) {
//         c += "\n" + b;
//       }
//     }
//     if (X > 1) {
//       c += "\n" + a;
//     }
//     alert(c);
//     console.log(c);
//   }
//   Square(S);
//   v = confirm("Попробуем ввести другоезначение?");
// }

v = true;
while (v === true) {
  let S = Number(prompt("Задание 9. Введите сторону ромба"));
  function Romb(X) {
    let a = "";
    for (let i = 1; i < X; i++) {
      a += " ";
    }
    a += "#";
    let c = a;
    if (X > 1) {
      for (let i = 1; i < X * 2 - 2; i++) {
        let b = "";

        for (let j = 0; j < Math.abs(X - i - 1); j++) {
          b += " ";
        }
        b += "#";

        let length = 2 * X - 1;
        let spaceLength = Math.abs(X - i - 1);
        let midLength = length - spaceLength * 2 - 2;

        for (let j = 0; j < midLength; j++) {
          b += " ";
        }

        if (i > 0 || i < X) {
          b += "#";
        }

        for (let j = 0; j < Math.abs(X - i - 1); j++) {
          b += " ";
        }

        // for (let j = 1; j < 2 * X - 2 * Math.abs(X - i - 1) - 2; j++) {
        //   b += " ";
        // }

        // b += "#";
        c += "\n" + b;
      }
      c += "\n" + a;
    }
    console.log(c);
    alert("Любуйтесь на ваш ромб в консоли!");
  }

  Romb(S);
  v = confirm("Попробуем ввести другоезначение?");
}
