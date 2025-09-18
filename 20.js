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
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.display = function () {
        console.log("Name :".concat(this.name, "\nAge :").concat(this.age));
    };
    return person;
}());
var person1 = new person();
person1.name = "Nen";
person1.age = 19;
person1.display();
