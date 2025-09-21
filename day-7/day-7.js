// Day 7: Modifying the DOM.

// 1. Changing Text Content
// const title = document.getElementById("main-title");

// title.textContent = "Updated Title";  // changes text
// title.innerText = "Visible Only Text";
// title.innerHTML = "<span style='color:red'>Red Title</span>"; // injects HTML

// 2️⃣ Changing Attributes
// const link = document.querySelector("a");

// link.setAttribute("href", "https://developer.mozilla.org");
// console.log(link.getAttribute("href")); // check value

// Shortcut for some attributes:

// const img = document.querySelector("img");
// img.src = "new-image.jpg";
// img.alt = "Updated alt text";

// 3️⃣ Changing Styles
// const paragraph = document.querySelector(".description");

// paragraph.style.color = "blue";
// paragraph.style.fontSize = "20px";
// paragraph.style.backgroundColor = "lightyellow";

// 4️⃣ Adding & Removing Classes
// const box = document.querySelector(".box");

// box.classList.add("highlight");
// box.classList.remove("hidden");
// box.classList.toggle("active"); // adds if not present, removes if present

// In your day-7.js:

// Change the <h1> text to "Welcome to DOM Manipulation".
const title = document.getElementById("main-title");
title.textContent = "Welcome to DOM Manipulation";

// Change the <p> text color to green.
const paragraph = document.querySelector(".description");
console.log(paragraph.textContent);
paragraph.style.color = "green";

// Change the <a> link to point to https://google.com.
const link = document.querySelector("a");
link.href = "https://google.com";

// Add a highlight class to the <div>.
const elem = document.querySelector(".box");
elem.classList.add("highlight");

// Update the <img> src and alt attributes.
const image = document.querySelector("img");
image.src = "https://placekitten.com/300/200";
image.alt = "cute cat";
