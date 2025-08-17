////////////////////////////////////////////////////////
// 🎯 Practice Section
////////////////////////////////////////////////////////

// Practice 1: Check if number is a multiple of 6
let input = prompt("Enter Number To Check Multiple of 6");
if (input % 6 === 0) {
  console.log(input, "is a multiple of 6");
} else {
  console.log(input, "is NOT a multiple of 6");
}

// Practice 2: Grade system based on marks
let marks = Number(prompt("Enter Your Marks"));
if (marks >= 80) {
  console.log("🏆 You Got Grade 'A'");
} else if (marks >= 70) {
  console.log("👏 You Got Grade 'B'");
} else if (marks >= 60) {
  console.log("🙂 You Got Grade 'C'");
} else if (marks >= 50) {
  console.log("😐 You Got Grade 'D'");
} else {
  console.log("😢 You Got Grade 'E'");
}
