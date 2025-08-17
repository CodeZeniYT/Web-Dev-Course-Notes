let str = "  Mayank  ";

// To get the length of str including spaces
console.log("Length of str =", str.length);

// To get the 3rd letter of str (index starts from 0)
console.log("3rd letter of str =", str[2]);

// Using charAt() to get character at a specific index
console.log("Character at index 2 using charAt =", str.charAt(2)); // Output: 'M' (with extra space before it)

// Convert string to uppercase
console.log("Uppercase str =", str.toUpperCase()); // Output: "  MAYANK  "

// Convert string to lowercase
console.log("Lowercase str =", str.toLowerCase()); // Output: "  mayank  "

// Remove spaces from both ends
console.log("Trimmed str =", str.trim()); // Output: "Mayank"

// Template literal
let object = {
  name: "pen",
  price: 245,
  quantity: 3,
};

let output = `Price of ${object.name} is ${object.price} and quantity is ${object.quantity}`;
console.log(output);

// \n is used for new line
console.log("Hello\nWorld");
// Output:
// Hello
// World

// \t is used for tab space
console.log("Name:\tMayank");
// Output:
// Name:    Mayank

// slice() method
let num = "0123456789";
console.log("Slice from index 1 to 8 =", num.slice(1, 8)); // Output: "1234567"

// concat() method
let str1 = "mayank";
let str2 = "kumar";
let res = str1.concat(str2);
console.log("Concatenated string =", res); // Output: "mayankkumar"

// replace() method
let string = "hello";
console.log("After replace =", string.replace("he", "jh")); // Output: "jhllo"
