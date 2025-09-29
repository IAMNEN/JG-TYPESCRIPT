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
var no1 = { a: 10, b: 20 };
var no2 = { b: 30, c: 40 };
var clone = __assign(__assign({}, no1), no2);
console.log(clone);
