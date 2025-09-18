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
var person3 = /** @class */ (function () {
    function person3(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    person3.prototype.display3 = function () {
        console.log("name : ".concat(this.name, "\nage: ").concat(this.age));
    };
    return person3;
}());
var person4 = new person3("Nen", 19);
person4.display3();
