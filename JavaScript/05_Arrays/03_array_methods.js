// 🍽️ 4. Array Methods - Push, Pop, toString
let dishes = [
  "Paneer",
  "Shahi Paneer",
  "Chilli Paneer",
  "Paneer Tikka",
  "Paneer Masala",
  "Butter Paneer Masala",
  "Grilled Paneer",
];

dishes.push("Palak Paneer"); // ➕ Add at end
let deletedDish = dishes.pop(); // ➖ Remove last element

console.log("🍴 Popular Dishes:", dishes);
console.log(`❌ Deleted Dish: ${deletedDish}`);
console.log("📃 Dishes as string:", dishes.toString());

console.log("\n------------------------------\n");

// 🦸‍♂️ 5. Working with Superheroes Arrays

// ✅ Marvel Heroes - Add at start using unshift
let marvelHeroes = [
  "SpiderMan",
  "IronMan",
  "Hulk",
  "Dr. Strange",
  "Captain America",
];
marvelHeroes.unshift("Ant-Man");
console.log("🛡️ Marvel Heroes:", marvelHeroes);

// ✅ DC Heroes - Remove from start using shift
let dcHeroes = [
  "SuperMan",
  "Flash",
  "Green Lantern",
  "BatMan",
  "Robin",
  "Cyborg",
];
let removedDcHero = dcHeroes.shift();
console.log(`❌ Removed DC Hero: ${removedDcHero}`);
console.log("🦇 DC Heroes:", dcHeroes);

// ✅ Slice: Extract part of an array (non-destructive)
let selectedDc = dcHeroes.slice(2, 5);
console.log("📌 Selected DC Heroes (slice):", selectedDc);

// ✅ Indian Heroes
let indianHeroes = ["Shaktiman", "Krish"];
console.log("🇮🇳 Indian Heroes:", indianHeroes);

// 🔗 Concatenate all arrays
let allHeroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log("🌍 All Heroes Combined:", allHeroes);

console.log("\n------------------------------\n");

// 🛠️ 6. Splice - Insert/Delete in Array (Modifies Original Array)
let userId = [213232, 41234, 432535, 32525, 352253, 235532];

// 🧩 Insert value 3 at index 2 (no deletion)
userId.splice(2, 0, 3); // (start, deleteCount, itemToAdd)
console.log("🛠️ User IDs after splice (insert at index 2):", userId);

// 🧹 Delete 2 items starting at index 3
userId.splice(3, 2); // Remove 2 elements from index 3
console.log("🗑️ User IDs after splice (delete from index 3):", userId);
// ✅ map(), filter(), reduce() in JavaScript

