// Day 1

// Exercise 1
console.log("Anna");

// Exercise 2
const myName = "Sara";
const myAge = 32;
const myHobby = "reading";

console.log(`Hi, I'm ${myName}, I'm ${myAge} years old and I love ${myHobby}.`);

// Day 2

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
