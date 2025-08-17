//best way to use promise chaining
async function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data fetched");
      resolve(200);
    }, 2000);
  });
}
async function getApi() {
  await api(); // 1st time
  await api(); // 2nd time
  await api(); // 3rd time
}

getApi();
