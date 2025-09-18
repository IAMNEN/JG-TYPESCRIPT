// class Person {
//  name: string;
//  age: number;

// displayDetails():void {
// console.log(`Name: ${this.name}, Age: ${this.age}`);
// }
// }

// let person1 = new Person();
// person1.name = "Alice";
// person1.age = 30;
// person1.displayDetails();

class person {
  name: string;
  age: number;

  display(): void {
    console.log(`Name :${this.name}\nAge :${this.age}`);
  }
}

let person1 = new person();
person1.name = "Nen";
person1.age = 19;
person1.display();
