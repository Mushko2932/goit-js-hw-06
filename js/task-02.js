const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const itemsArray = [];

ingredients.forEach(ingredient => {
// створюю окремий елемент
const listItem = document.createElement('li');
console.log(listItem);

// додаю назву інгридієнта
listItem.textContent = ingredient;

// додаю клас item
listItem.classList.add('item');

// вставляю li у список
itemsArray.push(listItem);

// додаю масив у список

});

list.append(...itemsArray);