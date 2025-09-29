let no1 = { a: 10, b: 20 };
let no2 = { b: 30, c: 40 };

let clone = { ...no1, ...no2 };
console.log(clone);
