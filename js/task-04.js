
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const spanWithValue = document.querySelector('#value');

decrementBtn.addEventListener('click', handleButtonDecrement);

incrementBtn.addEventListener('click', handleButtonIncrement);

    function handleButtonDecrement() {
        counterValue -=1;
        spanWithValue.textContent = `${counterValue}`
    };

    function handleButtonIncrement() {
        counterValue +=1;
        spanWithValue.textContent = `${counterValue}`
    };