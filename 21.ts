class Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  displayDetails(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let person2 = new Person("Bob", 25);
person2.displayDetails();
