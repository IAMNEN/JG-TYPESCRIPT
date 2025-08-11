const student = {name :"Nen",age:21};

student.age = 22;

Object.freeze(student);

console.log(student); // Output: { name: 'Nen', age: 22 }
const marks = [80, 90, 85];
marks.push(95);

Object.freeze(marks);
console.log(marks); // Output: [80, 90, 85, 95]