class details {
  static bankname: string = " SBI";
  holdername: string;
  balance: number;

  constructor(holdername: string, balance: number) {
    this.holdername = holdername;
    this.balance = balance;
  }

  display() {
    console.log(
      ` Bank Name ->${details.bankname} \n Acoount Holder Name ->${this.holdername}\n Acoount Balance ->${this.balance}`
    );
  }
}

let acc1 = new details("Nen", 100000);
acc1.display();
