
const inputSizeText = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

inputSizeText.addEventListener("input", () => {
    spanText.style.fontSize = `${inputSizeText.value}px`;
});
