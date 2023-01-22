function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// отримуємо посилання
const refs = {
  inputValue: document.querySelector('#controls input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

console.log(refs);

// створюємо пустий масив
const newArray = [];

// cтвор.'vj функцію, яка приймає один параметр - число
function createBoxes(amount) {

};

// cтворюємо функцію, яка очищає вміст
function destroyBoxes() {
  boxes.innerHTML = "";
};