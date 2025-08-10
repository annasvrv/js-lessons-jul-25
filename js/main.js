// Random letter from name or word 'contradiction'

const word = "contradiction";
word.length;
word.split("");

let i = Math.floor(Math.random() * word.length);

console.log(word.split(""));
console.log("Length:", word.length);
console.log(typeof i, i);

console.log(word.split("")[i]);

// ****************************

console.log(word.charAt(i));
