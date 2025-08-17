let DATA = "This is some data";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data = ", DATA);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  } // Call the constructor of the parent class
  editData() {
    Data = "This is some edited data od admin";
    console.log("Data edited by Admin");
  }
}
let student1 = new User("John", "lorem@lorem.com");
console.log(student1.viewData()); // Accessing method to view data
let teacher1 = new User("lorem", "lorem@lorem.com");
console.log(teacher1.viewData());
let newAdmin = new Admin("Admin", "lorem@admin.com ");
