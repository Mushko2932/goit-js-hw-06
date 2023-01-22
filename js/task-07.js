// отримуємо посилання на інпут
const inputValue = document.querySelector('#font-size-control');
console.log(inputValue);
// отримуємо посилання на спан
const spanValue = document.querySelector('#text');
console.log(spanValue);

// вішаємо слухача подій та змінюємо інлайн-стиль
inputValue.addEventListener('input', slider => {
    spanValue.style.fontSize = `${slider.target.value}px`;
});