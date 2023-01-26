
const inputSizeText = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

spanText.style.fontSize = `${inputSizeText.value}px`;

inputSizeText.addEventListener("input", () => {
    spanText.style.fontSize = `${inputSizeText.value}px`;
});