
const categoriesNumber = document.querySelectorAll('.item');
// виводимо кількість категорій
console.log(`Number of categories: , ${categoriesNumber.length}`);

categoriesNumber.forEach(item => {
    // виводимо текст заголовку елемента
    console.log(`Category: ${item.firstElementChild.textContent}`);

    // виведення елементів
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});


