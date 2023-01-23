
const textInput = document.querySelector('#name-input');

const textSpan = document.querySelector('#name-output');

textInput.addEventListener('input',handleInputText );

function handleInputText(event) {textSpan.textContent = event.currentTarget.value};