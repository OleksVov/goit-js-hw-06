// /Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const inputValidator = document.querySelector('#validation-input');

inputValidator.addEventListener('blur', handleInputValidator);

function handleInputValidator(event) {
    event.currentTarget.value.length === 6 ? inputValidator.style.borderColor="#4caf50": inputValidator.style.borderColor="#f44336";
};
