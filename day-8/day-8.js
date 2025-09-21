// Day 8: Events

// 1️⃣ addEventListener

// This is the main way to attach events in modern JavaScript.

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked!");
// });

// 2️⃣ Common Event Types

// Mouse: click, dblclick, mouseover, mouseout

// Keyboard: keydown, keyup, keypress

// Form: submit, input, change

// Window/Document: scroll, resize, DOMContentLoaded

// 3️⃣ Event Object

// Every event handler receives an event object with details.

// button.addEventListener("click", (event) => {
//   console.log("Event type:", event.type);
//   console.log("Target element:", event.target);
// });

// 4️⃣ Multiple Handlers

// You can attach more than one listener to the same element.

// button.addEventListener("click", () => console.log("First!"));
// button.addEventListener("click", () => console.log("Second!"));

// 5️⃣ Today’s Exercises

// Create an HTML file with:

// A <button id="my-btn">Click Me</button>

// An <input type="text" id="name-input">

// A <p id="output">Waiting...</p>

//  *******************************************

// In your day-8.js:

// Add a click event on the button → log "Button clicked!".

const button = document.querySelector("#my-btn");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Add a keydown event on the input → log the pressed key.
const input = document.querySelector("#name-input");
input.addEventListener("keydown", (event) => {
  // can see which key is pressed
  console.log("Key pressed:", event.key);
});

// When typing in the input, update the <p> text live with whatever is typed.
const liveText = document.querySelector("#output");

// updates result
input.addEventListener("change", updateValue);

function updateValue(e) {
  liveText.textContent = e.target.value;
}
// live update
input.addEventListener("input", (e) => {
  liveText.textContent = e.target.value;
});
