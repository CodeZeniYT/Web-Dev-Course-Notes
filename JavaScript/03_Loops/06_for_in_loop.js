let student = {
  name: "Mayank Kumar",
  age: 14,
  class: 8,
  isPass: true,
  marks: 81,
};

for (let key in student) {
  console.log("key =", key, "value =", student[key]); // ✅ Correct way
  // console.log("key =", key, "value =", student.key); // ❌ Incorrect: will always print undefined
}
