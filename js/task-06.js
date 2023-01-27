
const inputValidator = document.querySelector('#validation-input');

inputValidator.addEventListener('blur', handleInputValidator);


function handleInputValidator(event) {
    inputValidator.classList.add('invalid');
    inputValidator.classList.add('valid');
    event.currentTarget.value.length === 6 ? inputValidator.classList.remove('invalid') : inputValidator.classList.remove('valid');
};
