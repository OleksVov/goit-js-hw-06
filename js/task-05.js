
const textInput = document.querySelector('#name-input');

const textSpan = document.querySelector('#name-output');


textInput.addEventListener('input', handleInputText);


function handleInputText(event) {
event.currentTarget.value === "" ?
textSpan.textContent = "Anonymous" :
textSpan.textContent = event.currentTarget.value;
};
