class emp1 {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  showdetails(): void {
    console.log(
      `Name: ${this.name}, salary: ${this.salary}, department: ${this.department}`
    );
  }
}

let emp = new emp1("Krups", 17, "IT");
emp.showdetails();
