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
  "https://www.freepik.com/free-psd/beautiful-cat-portrait-isolated_38310664.htm#fromView=keyword&page=1&position=0&uuid=2173c628-b771-456d-b698-0173b662f0b8&query=Cat+png";
image.alt = "ginger cat";
