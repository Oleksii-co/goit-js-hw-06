
const numberOfCategories = document.querySelectorAll('.item');
console.log( 'Number of categories:', numberOfCategories.length);

const itemEl = document.querySelectorAll(".item");


for (const item of itemEl) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
}

