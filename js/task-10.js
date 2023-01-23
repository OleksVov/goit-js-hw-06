function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

const newDivBoxes = document.createElement("div");
newDivBoxes.style.width = '30px';
newDivBoxes.style.height = '30px';
newDivBoxes.style.backgroundColor = getRandomHexColor();

buttonCreate.addEventListener('click', () => {
  divBoxes.append(newDivBoxes);

});

buttonDestroy.addEventListener('click', () => {
  newDivBoxes.remove();

})