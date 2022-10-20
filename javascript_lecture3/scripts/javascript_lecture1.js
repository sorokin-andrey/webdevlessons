/* JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive 
 (e.g., having complex animations, clickable buttons, popup menus, etc.). 
 There are also more advanced server side versions of JavaScript such as Node.js, 
 which allow you to add more functionality to a website than downloading files 
 (such as realtime collaboration between multiple computers). 
 Inside a host environment (for example, a web browser), 
 JavaScript can be connected to the objects of its environment to provide programmatic control over them.
*/

/* part 1 */

// js datatypes: string, number, boolean, undefined, null
// ax + b = 0

var a;
var b = 3;
var x = 4;

console.log(a); // undefined
console.log(b); // will print 3
// console.log(c); // will print error 'Can't find variable: c'
a = 1;
console.log(a * x + b);

/* part 2. Strings and string concatenation */
console.log("Part 2");
console.log("Hello world!");
console.log("We are " + "frontend developers");
console.log("Our team consist of " + 5 + " persons");

console.log(2 + 2);
console.log(2 - 2);
console.log(3 * 3);
console.log(4 * 4);
console.log(5 * "5"); // ?
console.log(5 + "5"); // ?
console.log(6 - "6"); // ?
console.log("7" - 7); // ?

console.log("2 + 2 = " + 2 + 2); // ?
console.log("2 - 2 = " + 2 - 2); // ?
console.log("3 * 3 = " + 3 * 3);
console.log("3 / 3 = " + 3 / 3);

var result = 2 + (2 * 3) / (4 - 1);
console.log("Result = " + result);

console.log("2 + 2 = " + (2 + 2));
console.log("2 - 2 = " + (2 - 2));

console.log("4 ^ 4 = " + (4 ^ 4));

console.log("2.5 + 2.5 = " + (2.5 + 2.5));

/* part 3. String concatination with variables */
console.log("Part 3");
var myFirstName = "Andrey";
var myLastName;
var myAge = 32;
var isMan = true;

console.log("My firstname is: " + myFirstName);
console.log("My lastname is: " + myLastName);
console.log("My age is: " + myAge);
console.log("Am I am a man? " + isMan);
console.log("How old I will be in 5 years? " + myAge + 5); // ?
console.log("How old I will be in 5 years? " + (myAge + 5));

/* part 4. Infinity */
console.log("1 / 0 = " + 1 / 0); // ?
console.log(Infinity);
console.log(Infinity + 1); // ?
console.log(Infinity * -1); // ?
console.log(Infinity * 0); // ?

/* part 5. Modulus (Remainder) */
console.log("10 % 6 = " + (10 % 6)); // ?
console.log("10 % 5 = " + (10 % 5)); // ?
console.log("10 % 4 = " + (10 % 4)); // ?
console.log("10 % 3 = " + (10 % 3)); // ?
console.log("10 % 2 = " + (10 % 2)); // ?

/* part 6. Escape characters */
console.log('I am reading the book "The Lord of the rings"');
console.log("I am reading the book 'The Lord of the rings'");
console.log("I am reading the book \"'The Lord of the rings'\"");
console.log("I am reading the book \n \"'The Lord of the rings'\"");
console.log("I \t am \t reading \t the \t book");
console.log("The \t Lord \t of \t the \t rings");

/* part 7. Equality */ // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
var definedVariable;
var assignedVariable = 10;

console.log("0 == 0 is " + (0 == 0)); // loosely equal
console.log("0 != 1 is " + (0 != 1)); // loosely not-equal

console.log("1 === 1 is " + (1 === 1)); // strictly equal
console.log("1 !== 0 is " + (1 !== 0)); // strictly not-equal

console.log("2 == 2.5 is " + (2 == 2.5));

console.log("3 == '3' is " + (3 == "3"));
console.log("3 === '3' is " + (3 === "3"));

console.log("4 == 'asd' is " + (4 == "asd"));
console.log("4 === 'asd' is " + (4 === "asd"));

console.log("Object.is(5, 5) is " + Object.is(5, 5));
console.log("Object.is(5, '5') is " + Object.is(5, "5"));
console.log("Object.is(5, 'asd') is " + Object.is(5, "asd"));

/* part 8. Two zeroes */ // https://2ality.com/2012/03/signedzero.html
console.log("-0 > +0 = " + (-0 > +0));
console.log("-0 < +0 = " + (-0 < +0));
console.log("-0 + -0 = " + (-0 + -0));
console.log("-0 + +0 = " + (-0 + +0));
console.log("+0 + +0 = " + (+0 + +0));
console.log("1 / -0 = " + 1 / -0);
console.log("1 / +0 = " + 1 / +0);

console.log("-0 === +0 is " + (-0 === +0));
console.log("1 === 1 is " + (1 === 1));
console.log("1 / +0 === 1 / -0 is " + (1 / +0 === 1 / -0));

/* part 9 */
console.log("Part 4");
if (isMan == true) {
  // IsLooselyEqual
  console.log("I am a man");
}
if (isMan === true) {
  // IsStrictlyEqual
  console.log("I am a man");
} else {
  console.log("I am a woman");
}

/* part 10 */
var age = 22;
if (age > 21) {
  console.log("You can drink alcohol");
}
if (age > 18) {
  console.log("You can smoke sigarettes");
}
if (age > 16) {
  console.log("You can have sex");
}
console.log("You can touch your pennis");

/* part 11 */
var book = "Game of Thrones";
switch (book) {
  case "LOTR":
    console.log("You shall not pass!");
  // break;
  case "Harry Potter":
    console.log("Avada Kedavra!");
  // break;
  case "Game of Thrones":
    console.log("You know nothing, John Snow!");
  // break;
  case "War and Peace":
    console.log("Beautifull sky on the Auster!");
  // break;
  default:
    console.log("You are welcome");
}

/* part 12 */
var age = 22;
switch (age) {
  case 23:
  case 22:
  case 21:
    console.log("You can drink alcohol");
    break;
  case 18:
    console.log("You can smoke sigarettes");
    break;
  case 16:
    console.log("You can have sex");
    break;
  default:
    console.log("You can touch your pennis");
}

/* part 13 */
var i = 10;
while (i > 0) {
  console.log("i = " + i);
  i--;
}

for (var a = 10; a < 20; a = a + 1) {
  console.log("a = " + a);
}

/* part 14 */
for (var i = 0; i <= 10; i++) {
  if (i % 2 == 0 && i != 0) {
    // even numbers except 0
    console.log("i = " + i);
  }
}

var i = 0;
while (i < 10) {
  if (i % 2 == 0) {
    console.log("i = " + i); // even numbers except 0
  }
  i++;
}

/* part 15 */
for (var i = 0; i <= 100; i++) {
  if ((i - 3) % 5 == 0) {
    // every 5th element after 3 (3, 8, 13, 15)
    console.log("i = " + i);
  }
}

// every 5th element after 3 (3, 8, 13, 15)
for (var i = 3; i <= 100; i += 5) {
  console.log("i = " + i);
}

// every 5th element after 3 (3, 8, 13, 15)
var i = 3;
while (i <= 100) {
  console.log("i = " + i);
  i += 5;
}
