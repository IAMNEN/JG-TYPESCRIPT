class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
class Student extends Person {
  course: string;

  constructor(name: string, age: number, course: string) {
    super(name, age); 
    this.course = course;
  }

  displayDetails() {
    super.displayDetails(); 
    console.log(`Course: ${this.course}`);
  }
}
let student1 = new Student("John", 20, "BCA");
student1.displayDetails();
