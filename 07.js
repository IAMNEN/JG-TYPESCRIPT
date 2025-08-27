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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var std = {
    name: "Nen",
    age: 22,
    marks: [10, 20, 30],
};
var std2 = {
    name: "John",
    age: 23,
    marks: [15, 25, 35],
};
var marks1 = [10, 11, 12];
var marks2 = [15, 16, 17];
var merge = __spreadArray(__spreadArray([], marks1, true), marks2, true);
var clone = __assign(__assign({}, std), { city: "New York" });
console.log("Merge ->", merge);
console.log("Clone ->", clone);
