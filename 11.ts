let person = {
  name: "Ravi",
  scores: [95, 88, 76],
};

let {
  name: fullname,
  scores: [math, science, english],
} = person;

console.log(fullname);
console.log(math);
