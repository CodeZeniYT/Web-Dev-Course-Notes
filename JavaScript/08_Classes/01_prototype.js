const empolyee = {
  calcTax() {
    console.log("tax is 10%");
  },
};
const employee1 = {
  __proto__: empolyee,
  name: "John",
  age: 30,
};
// or
// calcTax.__proto__(employee1); // tax is 10%
