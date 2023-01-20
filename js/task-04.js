// отримуємо доступ до кнопок
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueNum = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// створюємо змінну, в якій буде зберігатися поточне значення лічильника
let counterValue = 0;

// додаємо слухачів та оновлюємо інтерфейс
decrementBtn.addEventListener('click', event => {
    counterValue -= 1;
    valueNum.textContent = counterValue;
}); 

incrementBtn.addEventListener('click', event => {
    counterValue += 1;
    valueNum.textContent = counterValue;
});