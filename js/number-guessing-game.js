// Number Guessing Game (Console Version)
// Goal:

// The computer picks a random number between 1 and 100.

// You try to guess it.

// After each guess, the computer tells you if it’s too high, too low, or correct.

// Number Guessing Game

// Generate random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Track attempts
let attempts = 0;
// let guess = Number(prompt("Enter your guess:")); // player’s guess
let guess; // player’s guess

while (true) {
  // Ask the user for a guess
  guess = Number(prompt("Enter your guess (1-100):"));
  attempts++;

  if (guess === secretNumber) {
    alert(
      `🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} tries!`
    );
    break; // exit the loop
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else {
    alert("Please enter a valid number!");
  }
}
