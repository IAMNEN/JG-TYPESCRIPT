var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user = {
    name: "Riya",
    age: 21,
    add: { city: "Ahmedabad", zip: "380015" },
};
var userClone = __assign({}, user);
userClone.name = "Amit😁";
userClone.add.city = "Surat";
console.log("original person:", user);
console.log("clone value is:", userClone);
