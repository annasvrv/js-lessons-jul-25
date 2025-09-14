// Day 6 - DOM Basics

// The DOM (Document Object Model) is a tree-like structure of your HTML. JavaScript can use the DOM to read or manipulate elements.

//  Selecting Elements: By ID, By Class, By Tag Name
//  Modern Way — querySelector / querySelectorAll

const firstParagraph = document.querySelector(".text"); // first match
const allParagraphs = document.querySelectorAll(".text"); // NodeList of all matches

//  Accessing / Reading Content

console.log(title.innerText);    // visible text
console.log(title.textContent);  // all text (including hidden)
console.log(title.innerHTML);    // HTML inside
