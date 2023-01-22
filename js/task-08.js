//  отримуємо посилання на форму
const form = document.querySelector('.login-form');
console.log(form);

// Обробка відправлення форми
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // якщо користувач заповнив усі поля і відправив форму
    const {
        elements: {email, password}
    } = event.currentTarget;

    // якщо у формі є незаповнені поля
    if (email.value === '' || password.value === '') {
        return alert('Заповніть будь ласка всю форму');
    };

    // виводимо об'єкт із введеними даними в консоль
    const userInformation = {
        email: email.value,
        password: password.value,
    };

    console.log(userInformation);

    // очищаємо значення полів
    event.currentTarget.reset();
};