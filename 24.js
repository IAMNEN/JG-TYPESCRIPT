var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.printName = function () {
        var vehicleName = this.name;
        console.log("The Name is:", vehicleName.toUpperCase());
    };
    return Vehicle;
}());
var v = new Vehicle();
v.name = "car";
v.printName();
