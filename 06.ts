let student = {
  name: "John Doe",
  age: 21,
  marks: [10, 20, 30],
};

let { name: FullName, age: Age, marks: Marks } = student;
console.log("Student Name ->", FullName);
console.log("Student Age ->", Age);
console.log("Student Marks ->", Marks);
