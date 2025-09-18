class BankAccount {
  static bankName: string = "State Bank";
  accountHolderName: string;
  accountBalance: number;

  constructor(accountHolderName: string, accountBalance: number) {
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
  }

  display(): void {
    console.log(
      `Bank: ${BankAccount.bankName}, Holdername: ${this.accountHolderName}, Balance: ${this.accountBalance}`
    );
  }
}
let acc1 = new BankAccount("Meena", 20000);
acc1.display();
