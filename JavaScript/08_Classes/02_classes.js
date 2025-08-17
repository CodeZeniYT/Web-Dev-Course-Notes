class Car {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}
let fortuner = new Car();
fortuner.setBrand = "fortuner";
fortuner.start();
fortuner.stop();
let lexus = new Car();
lexus.setBrand = "lexus";
lexus.start();
lexus.stop();
