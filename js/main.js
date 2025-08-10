// Day 1 Variables: var, let, const

// Exercise 1
console.log("Anna");

// Exercise 2
const myName = "Sara";
const myAge = 32;
const myHobby = "reading";

console.log(`Hi, I'm ${myName}, I'm ${myAge} years old and I love ${myHobby}.`);

// Day 2 Data Types

// Exercise 1 - Create variables for each data type (primitive + reference).

const testString = "variables for each data type";
const testNumber = 12345;
const testBoolean = true;
const testNull = null;
const testUndefined = undefined;
const testSymbol = Symbol(4);
const testBigint = 1233454n;

const testArray = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const testObject = {
  date: 25,
  weekDay: "Monday",
  month: "February",
};
const testFunction = function () {
  console.log("Create variables for each data type");
};

// Exercise 2 - Use typeof to log the type for each variable.
// Arrays, regular objects, null, and other complex types all return "object"

console.log(typeof testString);
console.log(typeof testNumber);
console.log(typeof testBoolean);
console.log(typeof testNull);
console.log(typeof testUndefined);
console.log(typeof testSymbol);
console.log(typeof testBigint);
console.log(typeof testArray);
console.log(typeof testObject);
console.log(typeof testFunction);

// Exercise 3 - Create an object for a book with properties: title, author, year.

const book = {
  title: "Black Boy",
  author: "Richard Wright",
  year: 1945,
};

// Exercise 4 - Create an array of at least 3 favorite movies.

const movies = ["Last", "Now", "Future"];

// Exercise 5 - Write a function that logs "Welcome to JavaScript!".

const myFunction = function () {
  console.log("Welcome to JavaScript");
};

// Call functions

testFunction();
myFunction();

// Day 3 Operators & Type Coercion

// Exercise 1 - Create two numbers and perform all arithmetic operations on them.

let x = 12;
let y = 4;

console.log(x + y); // 16
console.log(x - y); // 8
console.log(x * y); // 48
console.log(x / y); // 3
console.log(x % y); // 0 (remainder)
console.log(x ** y); // 20736 (exponent)

// Exercise 2 - Create a variable score = "100" and: Add 50 to it (see what happens with +), Subtract 50 from it (see what happens)

let score = "100";

score += 50;
console.log(score); // 10050

score -= 50;
console.log(score); // 10000

// Exercise 3 - Write a condition that: Checks if age is over 18 AND has a driving license. Logs "Can drive" or "Cannot drive".

let age = 18;
// age = 15;
let driveLicense = true;
driveLicense = false;
const driveAbility = function (age, driveLicense) {
  if (age >= 18 && driveLicense === true) {
    console.log("Can drive");
  } else {
    console.log("Cannot drive");
  }
};

driveAbility();

// Exercise 4 - Use ! to reverse a boolean variable.

let myVariable = false;
console.log(!myVariable);

// Exercise 5 - Test == vs === with the same values but different types.

console.log("100" == 100); // true  (type conversion happens)
console.log(23 === "23"); // false (different types)
