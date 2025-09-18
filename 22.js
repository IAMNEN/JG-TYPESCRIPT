var Employee = /** @class */ (function () {
    function Employee(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.showDetails = function () {
        console.log("Name: ".concat(this.name, ", Salary: ").concat(this.salary, ", Dept: ").concat(this.department));
    };
    return Employee;
}());
var emp = new Employee("Rahul", 50000, "IT");
emp.showDetails();
