function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
buttonChangeColor: document.querySelector(".change-color"),
spanValueColor: document.querySelector(".color"),
bodyBackgroundColor: document.querySelector('body')
};

refs.buttonChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  refs.bodyBackgroundColor.style.backgroundColor = color;
  refs.spanValueColor.textContent = color;
});


