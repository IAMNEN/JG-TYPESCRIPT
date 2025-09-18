var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
var person1 = new Person();
person1.name = "Alice";
person1.age = 30;
person1.displayDetails();
