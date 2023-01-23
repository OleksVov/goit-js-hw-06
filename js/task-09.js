function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
buttonChangeColor: document.querySelector(".change-color"),
spanValueColor: document.querySelector(".color"),
bodyBackgroundColor: document.querySelector('body')
};

refs.buttonChangeColor.addEventListener('click', () => {
  refs.bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  refs.spanValueColor.textContent = refs.bodyBackgroundColor.style.backgroundColor;
});


