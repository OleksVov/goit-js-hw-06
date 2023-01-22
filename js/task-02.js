const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listWithIngredients = document.querySelector('#ingredients');

const itemList = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  return item;
});

listWithIngredients.append(...itemList);

console.log(listWithIngredients);