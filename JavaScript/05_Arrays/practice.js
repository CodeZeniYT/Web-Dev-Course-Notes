// 🧪 2. Practice Question – Average of Marks
let studentMarks = [85, 97, 44, 37, 76, 60, 80];
let sum = 0;

for (let mark of studentMarks) {
  sum += mark;
}
let average = sum / studentMarks.length;

console.log("🔢 Total Marks =", sum);
console.log("📊 Average Marks =", average.toFixed(2)); // Rounded to 2 decimal places

console.log("\n------------------------------\n");

// 🧪 3. Practice Question – Apply 10% Discount
let products = [250, 645, 300, 900, 50];

console.log("💸 Product Prices after 10% Discount:");
for (let i = 0; i < products.length; i++) {
  let originalPrice = products[i];
  let discountedPrice = (originalPrice * 90) / 100; // 10% discount
  console.log(`Original: ₹${originalPrice} ➡️ Discounted: ₹${discountedPrice}`);
}

console.log("\n------------------------------\n");

// 🧪 3. Practice Questions –

// 📌 Q1: Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// 📌 Q2: Remove the first company from the array.

console.log("Removed First company", companies.shift(), companies);

// 📌 Q3: Remove "Uber" & add "Ola" in its place.
console.log(
  "Removed Uber & added ola",
  companies.splice(2, 1, "Ola"),
  companies
);
// 📌 Q4: Add "Amazon" at the end.
companies.push("Amazon");
console.log("Added Amazon at end =", companies);
