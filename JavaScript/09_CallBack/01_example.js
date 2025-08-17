//Set Timeout -ASYNCHRONOUS
// This code demonstrates the use of setTimeout to execute a callback function after a specified delay.
setTimeout(() => {
  console.log("This is a callback function executed after 2 seconds");
}, 2000);
//Synchronous code execution
console.log("one");
console.log("two");
setTimeout(() => {
  console.log("This is a callback function executed after 2 seconds");
}, 2000);
console.log("three");
console.log("four")