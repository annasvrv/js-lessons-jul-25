// Day 10 — Forms & Inputs
// 1️⃣ Selecting Form Elements

// You can grab form fields just like any other DOM element:

// <form id="user-form">
//   <input type="text" id="username" placeholder="Enter your name" />
//   <input type="email" id="email" placeholder="Enter your email" />
//   <button type="submit">Submit</button>
// </form>

// <p id="message"></p>

// const form = document.querySelector("#user-form");
// const usernameInput = document.querySelector("#username");
// const emailInput = document.querySelector("#email");
// const message = document.querySelector("#message");

// 2️⃣ Getting Input Values

// Inside an event handler you can read .value:

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // prevents page reload
//   console.log("Username:", usernameInput.value);
//   console.log("Email:", emailInput.value);
// });

// 3️⃣ Simple Validation

// Check if inputs are empty or invalid:

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (usernameInput.value === "" || emailInput.value === "") {
//     message.textContent = "❌ Please fill out all fields.";
//     message.style.color = "red";
//   } else {
//     message.textContent = `✅ Welcome, ${usernameInput.value}!`;
//     message.style.color = "green";
//   }
// });

// 4️⃣ Real-Time Input Updates

// Use the input event:

// usernameInput.addEventListener("input", () => {
//   message.textContent = `Typing: ${usernameInput.value}`;
// });

// ***********************************************************

// 💻 Today’s Exercises

// Create an HTML file with:
// A form containing:
// A text input for name (id="name").
// A password input (id="password").
// A submit button.
// A <p id="feedback"></p> below the form.

// In your day-10.js:

// Select the form and inputs.
// On submit (form.addEventListener("submit", ...)):
// Prevent reload with event.preventDefault().
// If name or password is empty → show "Please fill out all fields" in red.
// If password length < 6 → show "Password must be at least 6 characters" in orange.
// Otherwise → show "Welcome, <name>!" in green.
// (Optional) Add a real-time feature: while typing in the name field, update a preview paragraph that says:
// "Hello, [name]".

const greet = document.querySelector("#greet-title");
const form = document.querySelector("#user-form");
const userName = document.querySelector("#name");
const password = document.querySelector("#password");
const alertName = document.querySelector("#alert-name");
const alertPsw = document.querySelector("#alert-psw");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userName.value.trim() === "") {
    alertName.textContent = "Please fill out all fields";
    alertName.style.color = "#c62d2d";
  } else {
    alertName.textContent = "Correct";
    alertName.style.color = "#219121";
  }

  if (password.value.length === 0) {
    alertPsw.textContent = "Please fill out all fields";
    alertPsw.style.color = "#c62d2d";
  } else if (password.value.length < 6 && password.value.length > 0) {
    alertPsw.textContent = "Password must be at least 6 characters";
    alertPsw.style.color = "#b79023";
  } else {
    alertPsw.textContent = "Correct";
    alertPsw.style.color = "#219121";
  }
});

userName.addEventListener("input", (e) => {
  greet.textContent = `Hello, ${e.target.value || "friend"}!`;
});


//  *********************************************************

// Reusable validation function
// function validateForm({ nameInput, passwordInput, feedbackElement }) {
//   const nameValue = nameInput.value.trim();
//   const pswValue = passwordInput.value;

//   if (nameValue === "" || pswValue === "") {
//     feedbackElement.textContent = "❌ Please fill out all fields.";
//     feedbackElement.style.color = "#c62d2d";
//     return false;
//   }

//   if (pswValue.length < 6) {
//     feedbackElement.textContent = "⚠️ Password must be at least 6 characters.";
//     feedbackElement.style.color = "#b79023";
//     return false;
//   }

//   feedbackElement.textContent = `✅ Welcome, ${nameValue}!`;
//   feedbackElement.style.color = "#219121";
//   return true;
// }

// -----------------------------
// Setup for your form
// -----------------------------
// const greet = document.querySelector("#greet-title");
// const form = document.querySelector("#user-form");
// const userName = document.querySelector("#name");
// const password = document.querySelector("#password");
// const feedback = document.querySelector("#feedback");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   validateForm({
//     nameInput: userName,
//     passwordInput: password,
//     feedbackElement: feedback,
//   });
// });

// Real-time greeting
// userName.addEventListener("input", (e) => {
//   greet.textContent = `Hello, ${e.target.value || "friend"}!`;
// });

