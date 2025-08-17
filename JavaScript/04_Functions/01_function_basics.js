// 📌 Function Basics

// ✅ Function to greet a user by name
function greet(name) {
  // Ensure input is a string
  if (typeof name !== "string") {
    return "Invalid input. Please provide a name.";
  }

  // Return a personalized greeting message
  return `👋 Hello, ${name}!`;
}

// 🔍 Example usage
console.log(greet("Mayank")); // Output: 👋 Hello, Mayank!
