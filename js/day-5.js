// Day 5: Functions

// 1. Function Declarations
// Traditional way to define functions. Hoisted (can be called before they’re define

// 2. Function Expressions
// Functions stored in variables. Not hoisted.

// 3. Arrow Functions (ES6)
// Shorter syntax. Do not have their own this (important later).

// 4. Parameters & Return Values
// You can pass default values:
// Functions can return any type (string, number, object, array…).

// Today’s Exercise
// Write a function declaration square(num) that returns the square of a number.

function square(num) {
  num = Math.pow(num, 2);
  return num;
}
console.log("Answer:", square(12));

function square(num) {
  return num ** 2;
}
console.log("Answer:", square(3));

// Write a function expression that takes 2 numbers and returns their sum.

const sum = function (a, b) {
  return a + b;
};
console.log("The Sum is", sum(200, 45));

// Write an arrow function that takes 2 numbers and returns their product.
const product = (x, y) => x * y;
console.log("Product is:", product(8, 2));

// Create a function with a default parameter (e.g., greet(name = "friend")).
function workDays(day = "Monday") {
  return `Today is ${day}`;
}
console.log(workDays());

const officeDay = (day = "Tuesday") => `Our office day, ${day}`;
console.log(officeDay());
console.log(officeDay("Friday"));

// Write a function that takes an array of numbers and returns the largest number.

// First approach
function lagerstNum(list) {
  return Math.max(...list);
}

const numberOfList = [54, 92, 2, 1506, 43, 16, 28, 88];
const result = lagerstNum(numberOfList);
console.log(`The largest number: ${result}`);

// Second approach
const numberList = [34, 12, 2, 90, 43, 16];
let largestN = numberList[0];

numberList.forEach((number) => {
  if (number > largestN) {
    largestN = number;
  }
});

console.log("The largest number is", largestN);
