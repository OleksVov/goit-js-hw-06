
const inputValidator = document.querySelector('#validation-input');

inputValidator.addEventListener('blur', handleInputValidator);

function handleInputValidator(event) {
    event.currentTarget.value.length !== 6 ? inputValidator.classList.add('invalid') : inputValidator.classList.replace('invalid', 'valid');
};
