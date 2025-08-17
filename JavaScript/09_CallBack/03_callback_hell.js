// ==========================
// Example of Callback Hell (Nested Callbacks / Pyramid of Doom)
// ==========================

// This function simulates getting data using setTimeout
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data for ID: ${dataId}`);
    if (getNextData) {
      // If a callback is provided, call it
      getNextData();
    }
  }, 2000);
}

// Callback hell example — nested structure
getData(1, () => {
  console.log("getting data 2....");
  getData(2, () => {
    console.log("getting data 3....");
    getData(3, () => {
      console.log("getting data 4....");
      getData(4, () => {
        console.log("loaded all data");
      });
    });
  });
});

// ==========================
// Fix using Promises
// ==========================

// Promise syntax
let promiseSyntax = new Promise((resolve, reject) => {
  console.log("Promise is created");
  resolve("Promise is resolved");
  // reject("Promise is rejected"); // Uncomment to test rejection
});

// Using Promise to get data
function getDataPromise(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success"); // Always resolving here for demo
      // reject("error"); // Uncomment to test rejection
    }, 2000);
  });
}

// Example Promise
const getPromise = () => {
  return new Promise((resolve) => {
    console.log("I am a promise");
    resolve("123");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled",res);
});
promise.catch((err) => {
  console.log("promise rejected",err);
});
