/* part 1. arrays */
var array = [];
var array1 = [2, 3, 4, 5];
var array2 = [1, 2.2, true, "text"];
var array3 = [1, [2, 3], 4];
var array4 = new Array(5, 6, 8);
var array5 = Array.of(1, 2, 3);
var element = array1[2]; // 4
console.log(element);
array1[2] = 18;
element = array1[2]; // 18
console.log(element);
console.log("array1 length = " + array1.length);

// add elements
var arrayTest = [];
arrayTest[0] = 0;
arrayTest[1] = 1;
arrayTest.push(2);
arrayTest.push(3);
arrayTest.push(4, 5);
var lastElement = arrayTest.pop();
console.log(lastElement);

// iteration
for (var i = 0; i < arrayTest.length; i++) {
  console.log(i + " element of array is " + arrayTest[i]);
}

// matrix
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
for (var x = 0; x < 2; x++) {
  for (var y = 0; y < 3; y++) {
    console.log("[x][y] element of array = " + matrix[x][y]);
  }
}
for (var x = 0; x < matrix.length; x++) {
  for (var y = 0; y < matrix[x].length; y++) {
    console.log("[x][y] element of array = " + matrix[x][y]);
  }
}

/* part 2. Strings */
// methods
var s = "test string";
console.log("Original string is: " + s);
console.log("String length: " + s.length);
console.log("Substring (1 to 4): " + s.substring(1, 4));
console.log("Slice (3 to 8): " + s.slice(3, 8));
console.log("Negative slice: " + s.slice(-3));
console.log("Splitted string: " + s.split(" "));
console.log("Index of 'r': " + s.indexOf("r"));
console.log("Index of second 's': " + s.indexOf("s", 3));
console.log("Last index of 't': " + s.lastIndexOf("t"));
console.log("Is string starts with 'test': " + s.startsWith("test"));
console.log("Is string ends with 'bla': " + s.endsWith("bla"));
console.log("Is string includes 'st st': " + s.includes("st st"));
console.log(
  "Replaced 'test' from string with 'Andrey': " + s.replace("test", "Andrey")
);

// arrays
console.log("Character ar 1 index: " + s.charAt(1));
console.log("Character ar 1 index: " + s[1]);

// templates
var templateFirstName = "Andrey";
var templateLastName = "Sorokin";
var templateAge = 32;
// console.log("Hello " + templateLastName + ' ' + templateFirstName + "\nYour age is " + templateAge);
console.log(
  `Hello ${templateLastName} ${templateFirstName}\nYour age is ${templateAge}`
);

/* part 6. visibility scope (block, function, global). var, let, const */
if (true) {
  var a1 = 0;
  let a = 0;
  const A = 0;
}
// console.log("Test let visibility scope" + a);
// console.log("Test const visibility scope" + A);
console.log("Test var visibility scope" + a1);

let localVariableTest1 = "local variable test 1";
let localVariableTest2 = "local variable test 2";
const CONST_VARIABLE_TEST_1 = "CONST VARIABLE TEST 1";
const CONST_VARIABLE_TEST_2 = "CONST VARIABLE TEST 2";

console.log("==========");
for (let i = 0; i < 1; i++) {
  let localVariableTest1 = "local variable test 3";
  const CONST_VARIABLE_TEST_1 = "CONST VARIABLE TEST 3";
  console.log(localVariableTest1);
  console.log(localVariableTest2);
  console.log(CONST_VARIABLE_TEST_1);
  console.log(CONST_VARIABLE_TEST_2);

  let localVariableTest3 = "local variable test 3";
  var localVariableTest4 = "local variable test 4";
  console.log(localVariableTest3); // !!!
  console.log(localVariableTest4); // !!!
}
console.log("==========");
console.log(localVariableTest1);
console.log(localVariableTest2);
console.log(CONST_VARIABLE_TEST_1);
console.log(CONST_VARIABLE_TEST_2);
// console.log(localVariableTest3); // !!!
console.log(localVariableTest4); // !!!

/* functions */
function function1() {
  console.log("from function1");
}
function function2(input) {
  console.log("from function2. param = " + input);
}
function function3() {
  function2(function1());
}

var arr = [3, 4, 5];
function arrFunction(arr1) {
  var result = "";
  for (var i = 0; i < arr1.length; i++) {
    result += arr[i];
  }
  return result;
}

// console.log(arrFunction(arr));

var testVariable = "test";
let myFirstName = "Andrey";
let mySecondName = "Sorokin";
let myAge = 32;

function userInfo(firstName, secondName, age) {
  return `First name is ${firstName}, second name is ${secondName}, age is ${age} test is ${testVariable}`;
}

function calculateSum(startIndex, endIndex) {
  let result = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    result += i;
  }
  return result;
}

calculateDifference = function (firstElement, secondElement) {
  return firstElement - secondElement;
};

console.log(userInfo(myFirstName, mySecondName, myAge));
console.log(userInfo("Eduard", "Tyo", 33));
console.log(calculateSum(4, 86));
console.log(calculateSum(0, 5));
console.log(calculateDifference(10, 8));
