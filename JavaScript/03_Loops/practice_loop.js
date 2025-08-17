// 📌 JavaScript Loop Practice

// 1️⃣ Basic for loop: Print numbers from 0 to 100
for (let index = 0; index <= 100; index++) {
  console.log(index);
}

// 2️⃣ Practice: Print all even numbers from 0 to 100
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num, "is even");
  }
}

// 3️⃣ 🔢 Guess the Number Game using do...while

let secretNum = 25;
let userNum = Number(prompt("Guess the Number"));

do {
  if (userNum === secretNum) {
    alert("🎉 Congrats! Correct Guess!");
    break; // Exit the loop if guess is correct
  } else {
    userNum = Number(prompt("❌ Oh! Nice try. Guess one more time."));
  }
} while (true);
