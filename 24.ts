class Vehicle {
name: any;
printName() {
let vehicleName = this.name as string;
console.log("The Name is:", vehicleName.toUpperCase());
}
}

let v = new Vehicle();
v.name = "car";
v.printName();