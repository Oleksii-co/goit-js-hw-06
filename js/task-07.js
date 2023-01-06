const control = document.getElementById("font-size-control");
const text = document.getElementById("text");

control.addEventListener("change", size);

function size(event) {
  text.style.fontSize = this.value + "px";
}
