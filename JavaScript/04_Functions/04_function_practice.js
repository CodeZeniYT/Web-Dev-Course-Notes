// 🔸 Q1: Create a function that takes 3 numbers and returns their average.
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log("Average is", average(10, 20, 30)); // Output: 20

// 🔸 Q2: Write a function that checks if a number is even.
function isEven(n) {
  return n % 2 === 0;
}
console.log("Is 4 even?", isEven(4)); // Output: true

// 🔸 Q3: Arrow function to convert Celsius to Fahrenheit.
const cToF = (c) => (c * 9) / 5 + 32;
console.log("25°C in Fahrenheit =", cToF(25)); // Output: 77

// 🔸 Q4: Create a function to print the multiplication table of a number.
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
printTable(5); // Output: Table of 5

// 🔸 Q5: Create a function that returns the factorial of a number.
function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log("Factorial of 5 is", factorial(5)); // Output: 120

// 🔸 Q6: Create a function that takes a string and returns its reversed version.
function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse of 'hello' is", reverseStr("hello")); // Output: olleh

// 🔸 Q7: Make a function that counts the number of vowels in a string.
function countVowels(str) {
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++;
  }
  return count;
}
console.log("Vowel count in 'ApnaCollege' is", countVowels("ApnaCollege")); // Output: 5

// 🔸 Q8: Write a function that returns the larger of two numbers.
function max(a, b) {
  return a > b ? a : b;
}
console.log("Max of 12 and 8 is", max(12, 8)); // Output: 12

// 🔸 Q9: Create a function that checks if a string is a palindrome.
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log("Is 'madam' a palindrome?", isPalindrome("madam")); // Output: true

// 🔸 Q10: Arrow function to calculate area of a circle.
const areaOfCircle = (r) => Math.PI * r * r;
console.log("Area of circle with r=3 is", areaOfCircle(3)); // Output: 28.27...

// 🔸 Q11: Function to count vowels in a string using function keyword
function vowelCounter(str) {
  let count = 0;
  for (const char of str) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Vowels in 'effwerggaeenk' =", vowelCounter("effwerggaeenk")); // Output: 5

// 🔸 Q12: Same as above using arrow function
const vowelCount = (string) => {
  let count = 0;
  for (const char of string) {
    if ("aeiou".includes(char)) {
      count++;
    }
  }
  return count;
};
console.log("Vowels in 'abbcceeiio' =", vowelCount("abbcceeiio")); // Output: 5

// 🔸 Q13: forEach loop to add '@' before usernames
let user = ["user1", "user2", "user3", "user4", "user5", "user6"];
user.forEach((atrateAdder) => {
  const userName = `@${atrateAdder}`;
  console.log(userName);
});

// 🔸 Q14: forEach loop inside a function
function atrateAdder(users) {
  users.forEach((name) => {
    const userName = `@${name}`;
    console.log(userName);
  });
}
const userNameArray = ["Rohan", "Ajay", "Mohan"];
atrateAdder(userNameArray);

// 🔸 Q15: forEach to print square of numbers in an array
let num = [2, 3, 5, 6, 7];
num.forEach((val) => {
  const square = val * val;
  console.log(`Square of ${val} is ${square}`);
});

// 🔸 Q16: Map method to create a new array of squares
let number = [32, 52, 56, 75, 65];
let newSquare = number.map((val) => val * val);
console.log("Squared array =", newSquare);

// 🔸 Q17: Filter method to get even numbers
let arr = [22, 45, 67, 68, 89, 53];
let evenArr = arr.filter((value) => value % 2 === 0);
console.log("Even array is", evenArr);

// 🔸 Q18: Reduce method to get the sum of array values
let values = [12, 32, 46, 56];
const sumOfValues = values.reduce((res, val1) => res + val1);
console.log("Sum of values is", sumOfValues); // Output: 146

// 🔸 Q19: Filter out student marks above 90
let marks = [53, 55, 57, 79, 80, 90, 93, 97, 99];
const goodMarks = marks.filter((value) => value > 90);
console.log(`Marks above 90 is ${goodMarks}`);

// 🔸 Q20: Sum and Product of numbers from 1 to n using reduce
let n = prompt("Enter number to find sum and product of 1 to your number");
let arrayOfNum = [];
for (let i = 1; i <= n; i++) {
  arrayOfNum.push(i);
}

let sumOfNum = arrayOfNum.reduce((res, val) => res + val);
console.log("Sum from 1 to", n, "=", sumOfNum);

let productOfNum = arrayOfNum.reduce((res, val) => res * val);
console.log("Product from 1 to", n, "=", productOfNum);
