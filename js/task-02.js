const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const item = document.getElementById("ingredients");

const elements = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  return liRef;
});
item.append(...elements);
