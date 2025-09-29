var details = /** @class */ (function () {
    function details(holdername, balance) {
        this.holdername = holdername;
        this.balance = balance;
    }
    details.prototype.display = function () {
        console.log(" Bank Name ->".concat(details.bankname, " \n Acoount Holder Name ->").concat(this.holdername, "\n Acoount Balance ->").concat(this.balance));
    };
    details.bankname = " SBI";
    return details;
}());
var acc1 = new details("Nen", 100000);
acc1.display();
