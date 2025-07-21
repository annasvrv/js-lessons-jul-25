console.log("text");
console.log(typeof true);

const myVar = "longwordpasstovariable";

// STRING METHODS - more read on MDN

console.log(myVar.length);
console.log(typeof myVar.length);

// index position first
console.log(myVar.charAt(0));
console.log(myVar.charAt(4));
console.log(myVar.charAt(9));
console.log(myVar.charAt(21));

// the last index
console.log(myVar.lastIndexOf("ab"));

// slice method
console.log(myVar.slice(8, 17));
// slice - if define only start position, then slice from start to end of string
console.log(myVar.slice(8));

// to text transform
console.log(myVar.toUpperCase()); // returns in upper case
console.log(myVar.toLowerCase()); // returns in lower case

console.log(myVar.includes("pass")); // returns bolean

console.log(myVar.split("pass")); // returns an array of splits but 'pass' is not included
console.log(myVar.split("")); // returns an array of every character
console.log("egg,milk,bread,hat,bag,cat".split(",")); // splits where ,
console.log("We will adjust intensity and complexity every 2 months.".split(" ")); // splits with space
