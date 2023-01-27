function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const inputAmount = document.querySelector('input');


// let arrays = [];
// inputAmount.addEventListener('input', (event) => {

//   for (let i = 0; i < event.currentTarget.value; i += 1) {
//     arrays[i] = i;
//   };
//   return arrays;
// });

// buttonCreate.addEventListener('click', () => {

//   const elements = arrays.map(array => {

//     const newDivBoxes = document.createElement("div");

//       newDivBoxes.style.width = `${30 + 10 * array}px`;
//       newDivBoxes.style.height = `${30 + 10 * array}px`;
//       newDivBoxes.style.backgroundColor = getRandomHexColor();
//       return newDivBoxes;
//   })
//     divBoxes.append(...elements);
// });



buttonDestroy.addEventListener('click', () => {
  divBoxes.textContent = "";
  inputAmount.value = "";
});

let amount ;

inputAmount.addEventListener('input', (event) => {
  amount = event.currentTarget.value 
  return amount });

function create() {
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

buttonCreate.addEventListener('click',create);