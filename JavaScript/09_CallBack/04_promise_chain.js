const { a } = require("framer-motion/client");

//Promise Chain Example if we dont use promise chaining then we have to wait for each promise to resolve before moving to the next one
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 1 fetched");
      resolve("sucess");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data 2 fetched");
      resolve("sucess");
    }, 4000);
  });
}
console.log("fetching data 1.....");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("Data 1 resolved", res);
});
console.log("fetching data 1.....");
let p2 = asyncFunc2();
p1.then((res) => {
  console.log("Data 2 resolved", res);
});
//little easy to understand promise chaining we can also chain like first .then in end ...
asyncFunc1().then((res) => {
  console.log("fetching data 1.....");
  console.log("Data 1 resolved", res);
  console.log("fetching data 2.....");
  asyncFunc2().then((res) => {
    console.log("Data 2 resolved", res);
  });
});
//best way to use promise chaining ---next file