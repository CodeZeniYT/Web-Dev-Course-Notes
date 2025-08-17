let btn = document.querySelector(".btn");
btn.onclick = () => {
  console.log("Button was clicked By js");
};
let btn2 = document.querySelector(".btn2");
btn2.onmouseover = () => {
  console.log("you hover bt2");
};

let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  console.log("Button 3 was clicked");
});
let btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", () => {
  console.log("Button 4 was clicked");
});
btn4.removeEventListener("click", () => {
  console.log("Button 3 clicked By js");
});
let btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", (e) => {
  console.log("Button 5 was clicked");
  e.stopPropagation(); // Prevents the event from bubbling up to parent elements
});
let btn6 = document.querySelector(".btn6");
const handleClick = ()=>{
    console.log("Button 6 was clicked");
}
btn6.addEventListener("click", handleClick);
// btn6.removeEventListener("click", handleClick); // This will remove the event listener