function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const inputAmount = document.querySelector('input');


let amount = 0;
let arrays = [];

inputAmount.addEventListener('input', (event) => {
  amount = event.currentTarget.value;
  
  for (let i = 0; i < amount; i += 1) {
    arrays[i] = i;
  };
  return arrays;
});

buttonCreate.addEventListener('click', () => {
  const elements = arrays.map(array => {

    const newDivBoxes = document.createElement("div");
      newDivBoxes.style.width = `${30 + 10 * array}px`;
      newDivBoxes.style.height = `${30 + 10 * array}px`;
      newDivBoxes.style.backgroundColor = getRandomHexColor();
    
      return newDivBoxes;
  })
    
    divBoxes.append(...elements);
});

buttonDestroy.addEventListener('click', () => {
  divBoxes.textContent = "";
  inputAmount.value = "";

});