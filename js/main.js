//  NUMBER METHODS

const myNumer = 42; // integer
const myFloat = 42.013456; // float
const myString = "42"; // string
const myString1 = "42.469sgj5467abc"; // string

console.log(myNumer);
console.log(myString + 3); // 423

console.log(Number(myString) + 3); // 45
console.log(Number("String")); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0 = false

// Number methods

// Number.isInteger()
console.log(Number.isInteger(myString)); // false
console.log(Number.isInteger(myNumer)); //true

// Number.parseFloat() . If number can't be parsed, it returns NaN

console.log(Number.parseFloat(myFloat)); // 42.01
console.log(Number.parseFloat(myString1)); // 42.469 finds number in string and returns number

// toFixed() method formats a number according to how many decimal points you provide as the parameter.

console.log(myFloat.toFixed(2));

//  Number.parseInt() method parses a string argument and returns an integer

console.log(Number.parseInt(myFloat));

console.log(typeof myFloat.toFixed(2)); // returns string, not number
