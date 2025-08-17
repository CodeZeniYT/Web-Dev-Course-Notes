class Person {
  eat() {
    console.log("Eating...");
  }
  sleep() {
    console.log("Sleeping...");
  }
}

// Class names should start with capital letters by convention
class Clerk extends Person {
  work() {
    console.log("Working...");
  }
}

let clerk1 = new Clerk();
console.log(clerk1); // Shows Clerk object in console
clerk1.eat(); // Inherited from Person
clerk1.sleep(); // Inherited from Person
clerk1.work(); // From Clerk
