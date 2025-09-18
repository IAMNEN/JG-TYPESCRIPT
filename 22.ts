class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  showDetails(): void {
    console.log(
      `Name: ${this.name}, Salary: ${this.salary}, Dept: ${this.department}`
    );
  }
}

let emp = new Employee("Rahul", 50000, "IT");
emp.showDetails();
