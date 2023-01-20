// отримуємо посилання на інпут
const inputValue = document.querySelector('#validation-input');
console.log(inputValue);

// вішаємо слухача подій
inputValue.addEventListener('blur', event => {
    if (event.target.value.length == inputValue.getAttribute('data-length')) {
        inputValue.classList.add('valid')
    } else {
        inputValue.classList.add('invalid');
    };
    
});


