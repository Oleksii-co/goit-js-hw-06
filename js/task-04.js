let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
