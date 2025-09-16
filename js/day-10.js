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

const form = document.querySelector("#user-form");
const userName = document.querySelector("#name");
const password = document.querySelector("#password");
const notification = document.querySelector("#feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // if (userName.value === "" || password.value === "") {
  //   notification.forEach((elem) => {
  //     elem.textContent = "Please fill out all fields";
  //     elem.classList.add("text--error");
  //   });
  // }

  if (userName.value === "" || password.value === "") {
    notification.textContent = "Please fill out all fields";
    notification.classList.add("text--error");
  } else {
    notification.textContent = "Correct";
    notification.classList.add("text--accept");
  }
});
