// Math Methods and Properties

console.log(Math.PI); // returns π 3.141592653589793

console.log(Math.trunc(Math.PI)); // returns 3

console.log(Math.round(4.3)); // returns nearest integer 4
console.log(Math.round(4.6)); // returns nearest integer 5

console.log(Math.ceil(4.2)); // returns round to top integer 5
console.log(Math.floor(4.7)); // returns round to bottom integer 4

console.log(Math.pow(2, 6)); // returns power 64
console.log(Math.pow(5, 2)); // returns power 25

console.log(Math.min(4, 2, 7, 5)); // returns min value 2
console.log(Math.min(4, 2, 0.7, 5)); // returns min value 0.7
console.log(Math.max(4, 2, 7, 15, 15.3)); // returns max value 15.3

// random method random number from 0 up to 1, never include 1
console.log(Math.random()); // returns random number from 0 to 1 - 0.5055406031277931
console.log(Math.random().toFixed(2)); // returns random number, reduce to 2 digit - 0.05
console.log(Math.random().toFixed(3)); // returns random number from 0 to 1 - 0.678
console.log(Math.random().toFixed(4)); // returns random number from 0 to 1 - 0.3254

// random from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
