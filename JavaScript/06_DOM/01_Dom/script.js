// 📚 Ways to Select Elements in JavaScript

// ✅ 1. Select by ID (No '#' in getElementById)
const byId = document.getElementById("learn-btn");
console.log("📌 By ID:", byId);

// ✅ 2. Select by Class (No '.' in getElementsByClassName)
const byClass = document.getElementsByClassName("dummy");
console.log("📌 By Class:", byClass); // returns HTMLCollection

// ✅ 3. Select by Tag Name
const byTag = document.getElementsByTagName("p");
console.log("📌 By Tag:", byTag); // returns HTMLCollection

// ✅ 4. Select first match using querySelector (can use #, ., or tag)
const firstDiv = document.querySelector("div"); // selects first <div>
const firstById = document.querySelector("#learn-btn"); // selects by ID
const firstByClass = document.querySelector(".learn-btn"); // selects by class
console.log("📌 querySelector (div):", firstDiv);
console.log("📌 querySelector (#learn-btn):", firstById);
console.log("📌 querySelector (.learn-btn):", firstByClass);

// ✅ 5. Select all matches using querySelectorAll
const allPs = document.querySelectorAll("p"); // all <p> tags
const allByClass = document.querySelectorAll("ul"); // all elements with class
console.log("📌 querySelectorAll (p):", allPs);
console.log("📌 querySelectorAll (.learn-btn):", allByClass);
