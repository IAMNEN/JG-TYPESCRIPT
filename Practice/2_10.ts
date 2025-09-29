interface Add {
  city: string;
  zip: string;
}
interface person {
  name: string;
  age: number;
  address: Add;
}
let Student: person = {
  name: "Nen",
  age: 19,
  address: { city: "Ahm", zip: "123456" },
};

console.log(Student);
