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

// cтворюємо функцію, яка приймає один параметр - число
function createBoxes(amount) {
  const newArray = [];

  for (let i = 0; i < amount; i += 1) {
    const boxElement = document.createElement('div');

    boxElement.style.backgroundColor = getRandomHexColor();
    const boxSize = (i * 10) + 30;
    boxElement.style.width = `${boxSize}px`;
    boxElement.style.height = `${boxSize}px`;

    newArray.push(boxElement);
  };
  return newArray;
};

// cтворюємо функцію, яка очищає вміст
function destroyBoxes() {
  boxes.innerHTML = "";
};

// додавання слухача подій
refs.btnCreate.addEventListener('click', event => {
  const newElement = createBoxes(refs.inputValue.value);
  boxes.append(...newElement);
});

refs.btnDestroy.addEventListener('click', event => {
  destroyBoxes();
});