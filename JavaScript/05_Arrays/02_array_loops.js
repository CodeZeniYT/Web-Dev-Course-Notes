// ✅ 1. Arrays and Modifying Elements
let marks = [12, 23, 45, 67, 89, 90];

// 🎯 Update value at index 4
marks[4] = 40;
console.log("✅ Updated marks at index 4 =", marks[4]); // Output: 40

// 🔁 Loop through array using traditional for loop
console.log("📋 Marks using for loop:");
for (let i = 0; i < marks.length; i++) {
  console.log(`marks[${i}] =`, marks[i]);
}

// 🔁 Loop through array using for...of (cleaner when index is not needed)
let students = [
  "student1",
  "student2",
  "student3",
  "student4",
  "student5",
  "student6",
  "student7",
];

console.log("📋 Student Names using for...of loop:");
for (let name of students) {
  console.log(`Name of student: ${name}`);
}

console.log("\n------------------------------\n");
