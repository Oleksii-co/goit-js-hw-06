const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const item = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  item.append(liRef);
}
