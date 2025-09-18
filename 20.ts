class Person {
 name: string;
 age: number;

displayDetails():void {
console.log(`Name: ${this.name}, Age: ${this.age}`);
}
}

let person1 = new Person();
person1.name = "Alice";
person1.age = 30;
person1.displayDetails();