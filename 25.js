var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolderName, accountBalance) {
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    BankAccount.prototype.display = function () {
        console.log("Bank: ".concat(BankAccount.bankName, ", Holdername: ").concat(this.accountHolderName, ", Balance: ").concat(this.accountBalance));
    };
    BankAccount.bankName = "State Bank";
    return BankAccount;
}());
var acc1 = new BankAccount("Meena", 20000);
acc1.display();
