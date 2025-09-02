interface student {
  name: string;
  age: number;
  marks: number[];
}

interface student2 {
  information: student;
  city: string;
}

const std3: student2 = {
  information: {
    name: "Nen",
    age: 19,
    marks: [10, 20, 30],
},
  city: "New York",
};

console.log("information ->", std3);
