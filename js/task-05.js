
// отримуємо посилання на інпут та спан
const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');

// додаємо слухача подій
inputValue.addEventListener('input', event => {
    spanValue.textContent = event.currentTarget.value;
});