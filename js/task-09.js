function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// отримуємо посилання 
const body = document.querySelector('body');
  console.log(body);
const btnValue = document.querySelector('.change-color');
  console.log(btnValue);
const spanValue = document.querySelector('.color');
  console.log(spanValue);

// додаємо слухача
btnValue.addEventListener('click', event => {

  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanValue.textContent = color;
  
});
