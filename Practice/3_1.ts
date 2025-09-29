class person {
  name2: string;
  age2: number;

  constructor(name2: string, age2: number) {
    this.name2 = name2;
    this.age2 = age2;
  }

  display() {
    console.log(`Name :${this.name2},Age : ${this.age2}`);
  }
}

class student extends person {
  course: string;

  constructor(name2: string, age2: number, course: string) {
    super(name2, age2);
    this.course = course;
  }

  display() {
    super.display();
    console.log(`Course : ${this.course}`);
  }
}

let student2 = new student("Nen", 19, "IT");
student2.display();
