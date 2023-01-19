const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// посилання на список
const imagesGallery = document.querySelector('.gallery');

// перебираємо масив
const pageMarkup = images.map(image =>
  `<li><img class ='photo' src ='${image.url}' alt ='${image.alt}' width ='275'></li>`
).join('');

// додаємо елементи
imagesGallery.insertAdjacentHTML('beforeend', pageMarkup);

// додаємо стилі
const gallery = document.querySelectorAll('.photo');

imagesGallery.style.display = 'flex';
imagesGallery.style.gap = '30px';
imagesGallery.style.justifyContent = 'center';
imagesGallery.style.alignItems = 'center';
