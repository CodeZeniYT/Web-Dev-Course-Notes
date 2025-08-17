const URL = "https://dog.ceo/api/breeds/image/random";
let promise = fetch(URL);
let seperator = "-------------------";

// console.log("intro\n", promise, "\n" + seperator);
// a better way to write
const getFact = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  console.log(response);
  console.log("status: ", response.status);
  console.log("status text: ", response.statusText);
};
