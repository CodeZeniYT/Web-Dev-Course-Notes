
// Passing super agrument to parent from child class
class School {
  constructor(studentName) {
    this.name = studentName;
    console.log(studentName, "is of school");
  }
  start() {
    Time = "8 a.m";
    console.log("School starts at", Time);
    console.log("School started");
  }
  stop() {
    Time = "3 p.m";
    console.log("School stops at", Time);
    console.log("School stopped");
  }
}
class Student extends School {
  constructor(studentName, age) {
    super(studentName); // Call the constructor of the parent class
    this.age = age;
    console.log("Student created");
  }
  study() {
    console.log("Studying...");
  }
}
let student1 = new Student("John", 16);
console.log(student1);