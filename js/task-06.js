// отримуємо посилання на інпут
const inputValue = document.querySelector('#validation-input');
console.log(inputValue);

// вішаємо слухача подій
inputValue.addEventListener('blur', event => {
    if (event.target.value.length > inputValue.dataset['length']) {
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
        
        console.log(inputValue);
        
    } else {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
        
        console.log(inputValue);
    };
    
});
