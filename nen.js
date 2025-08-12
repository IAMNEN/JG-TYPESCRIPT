class BankAccount {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
    this.history = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Deposited ₹${amount}`);
      console.log(`✅ ₹${amount} deposited. New balance: ₹${this.balance}`);
    } else {
      console.log("❌ Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.history.push(`Withdrew ₹${amount}`);
      console.log(`✅ ₹${amount} withdrawn. New balance: ₹${this.balance}`);
    } else {
      console.log("❌ Insufficient funds or invalid amount.");
    }
  }

  getTransactionHistory() {
    console.log(`Transaction history for ${this.name}:`);
    this.history.forEach((entry) => {
      console.log(` - ${entry}`);
    });
  }
}