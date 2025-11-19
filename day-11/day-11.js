// 1) The Big Five (with tiny examples)
// map: transform each item → new array (same length)
// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2);           // [2, 4, 6]

// filter: keep items that pass a test
// const evens = nums.filter(n => n % 2 === 0);     // [2]

// reduce: fold array → single value (sum, object, etc.)
// const sum = nums.reduce((acc, n) => acc + n, 0); // 6

// find: first item that matches (or undefined)
// const firstBig = [3, 7, 9].find(n => n > 5);     // 7

// some / every: any? all?
// const hasEven = nums.some(n => n % 2 === 0);     // true
// const allPositive = nums.every(n => n > 0);      // true