// ✅ Get the element
let text = document.querySelector("h2");
let div = document.getElementsByClassName("box");
// ✅ Append string only to its text content
for (let i = 0; i < 3; i++) {
  div[i].innerText += " edited by js";
}
