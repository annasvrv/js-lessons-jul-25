// Day 9: Event Bubbling & Delegation.

// 1️⃣ Event Bubbling

// When you click an element, the event travels up the DOM tree (child → parent → document → window).
// Example:

// <div id="parent">
//   <button id="child">Click me</button>
// </div>

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent clicked (bubbled up)");
// });

// If you click the button → you’ll see both logs because the event bubbles.

// 2️⃣ Stopping Bubbling

// You can stop it with:

// child.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Only child clicked");
// });

// 3️⃣ Event Delegation

// Instead of attaching an event to every child element, you attach it to the parent and let bubbling handle it.

// Example:

// <ul id="list">
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Cherry</li>
// </ul>

// const list = document.querySelector("#list");

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     console.log("You clicked:", e.target.textContent);
//   }
// });

// 👉 This way, even if you add new <li> later, the event still works!

// 4️⃣ Today’s Exercises

// Create an HTML file with:

// A <div id="container">

// Inside it, at least 3 buttons (<button>One</button>, etc.)

// In your day-9.js:

// Add a click listener to one button → log "Button X clicked".
const button = document.querySelector("#btn-1");
button.addEventListener("click", (e) => {
  console.log("Button X clicked");
});

// Add a click listener to the container div → log "Container clicked".
const btnContainer = document.querySelector("#container");
btnContainer.addEventListener("click", (e) => {
  console.log("Container clicked");
});

// Try clicking the button → notice both fire (bubbling).

// Prevent bubbling with stopPropagation() so only the button logs.
const buttonAll = document.querySelectorAll("button");
buttonAll.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Button any clicked");
});

// Finally, implement delegation: one listener on the container that logs the text of whichever button was clicked.
btnContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("You clicked:", e.target.textContent);
  }
});
