// class Person {
//   constructor(public name: string, public age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   displayDetails(): void {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }

// let person2 = new Person("Bob", 25);
// person2.displayDetails();

class person3 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  display3(): void {
    console.log(`name : ${this.name}\nage: ${this.age}`);
  }
}
let person4 = new person3("Nen", 19);
person4.display3();
