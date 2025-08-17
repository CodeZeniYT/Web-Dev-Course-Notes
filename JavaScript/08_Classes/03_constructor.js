class Car {
  constructor(brand,price) {
    this.brand = brand;
    this.price = price;
    console.log(brand,"car created");
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }

}
let fortuner = new Car("fortuner",2500000);
console.log(fortuner)
let lexus = new Car("lexus",5400000);
console.log(lexus);