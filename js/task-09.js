function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", changeColor);
const spanColor = document.querySelector(".color");

function changeColor() {
  const color = getRandomHexColor();
  spanColor.textContent = color;
  body.style.backgroundColor = color;
}
