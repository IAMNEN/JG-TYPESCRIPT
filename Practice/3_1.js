var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name2, age2) {
        this.name2 = name2;
        this.age2 = age2;
    }
    person.prototype.display = function () {
        console.log("Name :".concat(this.name2, ",Age : ").concat(this.age2));
    };
    return person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name2, age2, course) {
        var _this = _super.call(this, name2, age2) || this;
        _this.course = course;
        return _this;
    }
    student.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Course : ".concat(this.course));
    };
    return student;
}(person));
var student2 = new student("Nen", 19, "IT");
student2.display();
