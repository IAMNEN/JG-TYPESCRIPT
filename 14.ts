interface Address {
  city: string;
  zip: string;
}
interface Person {
  name: string;
  age: number;
  add: Address;
}

const user: Person = {
  name: "Riya",
  age: 21,
  add: { city: "Ahmedabad", zip: "380015" },
};

const userClone = { ...user };

userClone.name = "Amit";

userClone.add.city = "Surat";

console.log("original person:", user);

console.log("clone value is:", userClone);
