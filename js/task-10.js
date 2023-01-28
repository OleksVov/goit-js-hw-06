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

inputAmount.addEventListener('input', (event) => {
  amount = event.currentTarget.value 
  return amount });

buttonCreate.addEventListener('click',createBoxes);

function createBoxes() {
  const items = [];
  
  for (let i = 0; i < amount; i += 1) {
    const newDivBoxes = document.createElement("div");

    newDivBoxes.style.width = `${30 + 10 * i}px`;
    newDivBoxes.style.height = `${30 + 10 * i}px`;
    newDivBoxes.style.backgroundColor = getRandomHexColor();
  
    items.push( newDivBoxes);
  }
  divBoxes.append(...items)

};


buttonDestroy.addEventListener('click', () => {
  divBoxes.textContent = "";
  inputAmount.value = "";
  amount = "";
});