//  Day 4: Control Flow

// if/else  Basic conditional logic

// switch Cleaner than multiple if statements when checking the same variable:

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Midweek day");
}

//  Loops

// - for

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// while

let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// do...while   Executes at least once:

let num = 5;
do {
  console.log(num);
  num++;
} while (num <= 7);

// break & continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // stops the loop
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skips this iteration
  console.log(i);
}

// ******************************************************

// Exercise

// Write an if/else that checks if a number is positive, negative, or zero.

let num1 = 0;

if (num1 > 0) {
  console.log("positive number");
} else if (num1 < 0) {
  console.log("negative number");
} else {
  console.log("it is a zero");
}

// Use a switch to print the name of the day for numbers 1–7.

let weekDay = 5;

switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Weekday");
}

// Write a for loop that prints all even numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
  if (i%2 === 0) {
    console.log(i);
  } 
}

// Write a while loop that counts down from 10 to 1.

let countNumber = 10;
while (countNumber > 0) {
  console.log(countNumber);
  countNumber = countNumber - 1;
}


// Use a for loop with continue to skip the number 13 while printing numbers from 10 to 20.
for (let n = 10; n <=20; n++) {
  if (n === 13) continue;
  console.log(n);
}
