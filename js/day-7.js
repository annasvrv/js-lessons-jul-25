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
image.src =
  "https://www.google.com/imgres?q=cat&imgurl=https%3A%2F%2Fi.guim.co.uk%2Fimg%2Fmedia%2F327aa3f0c3b8e40ab03b4ae80319064e401c6fbc%2F377_133_3542_2834%2Fmaster%2F3542.jpg%3Fwidth%3D465%26dpr%3D1%26s%3Dnone%26crop%3Dnone&imgrefurl=https%3A%2F%2Fwww.theguardian.com%2Fus-news%2F2025%2Fmay%2F22%2Fginger-cats-mystery-solved&docid=gg7zTLzu9y87gM&tbnid=0vHbjWlk-92axM&vet=12ahUKEwid2_2JtNqPAxXDT6QEHcSbOZsQM3oECBoQAA..i&w=465&h=372&hcb=2&ved=2ahUKEwid2_2JtNqPAxXDT6QEHcSbOZsQM3oECBoQAA";
image.alt = "ginger cat";
