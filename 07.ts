let std = {
  name: "Nen",
  age: 22,
  marks: [10, 20, 30],
};
let std2 = {
  name: "John",
  age: 23,
  marks: [15, 25, 35],
};
let marks1: number[] = [10, 11, 12];
let marks2: number[] = [15, 16, 17];

let merge = [...marks1, ...marks2];

let clone = { ...std, city: "New York" };

console.log("Merge ->", merge);
console.log("Clone ->", clone);
