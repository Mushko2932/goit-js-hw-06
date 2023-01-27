// отримуємо посилання на інпут
const inputValue = document.querySelector('#validation-input');
console.log(inputValue);

// вішаємо слухача подій
inputValue.addEventListener('blur', event => {
    if (Number(inputValue.dataset['length']) !== event.target.value.length) {
        console.log(event.target.value.length)
        console.log(inputValue.dataset['length'])
        inputValue.classList.remove('valid');
        inputValue.classList.add('invalid');
        
        console.log(inputValue);
        
    } else {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
        
        console.log(inputValue);
    };
    
});

// .dataset['length']
// .getAttribute('data-length')