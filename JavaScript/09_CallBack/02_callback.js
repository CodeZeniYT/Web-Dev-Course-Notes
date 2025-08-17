const sum = (a, b) => {
  return a + b;
};
const calculate = (a, b, Sumcallback) => {
  console.log(Sumcallback(a, b))
};
calculate(1, 50, sum);
//hcallback hell