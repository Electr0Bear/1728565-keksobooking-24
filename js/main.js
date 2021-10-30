const TITLE_1 = ['Роскошн', 'Просторн', 'Доступн', 'Комфортабельн', 'Элегантн'];
const TITLE_2 = ['дворец', 'квартира', 'дом', 'бунгало', 'номер в отеле'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_OUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Новый ремонт', 'Живописный вид', 'Тихий район', 'В шаговой доступности от метро', 'Можно с животными', 'Удобный паркинг', 'Рядом есть парк'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const types = {
  palace: `ый ${TITLE_2[0]}`,
  flat: `ая ${TITLE_2[1]}`,
  house: `ый ${TITLE_2[2]}`,
  bungalow: `ое ${TITLE_2[3]}`,
  hotel: `ый ${TITLE_2[4]}`,
};

// Функция возвращающая случайное целое число в заданном диапазоне
const getRndInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция возвращающая случайное число в заданном диапазоне с указанием количества знаков после запятой
const getRndFloat = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
};

// Функиця, возвращающая массив из случаного набора уникальных элементов от передаваемого массива
const getRndElements = (array) => {
  const rndArr = [...new Set(Array.from({length: getRndInteger(1, array.length)}, () => array[getRndInteger(0, array.length - 1)]))];
  return rndArr;
};

// Функия генерации объекта
const getObject = (counter) => {
  counter < 10 ? counter = `0${counter}` : counter;
  const avatar = `img/avatars/user${counter}.png`;
  const latitude = getRndFloat(35.65000, 35.70000, 5);
  const longitude = getRndFloat(139.70000, 139.80000, 5);
  const type = TYPES[getRndInteger(0, 4)];
  const rooms = getRndInteger(1, 10);
  const title = TITLE_1[getRndInteger(0, TITLE_1.length - 1)] + types[type];
  const price = rooms * getRndInteger(1000, 5000);
  const guests = rooms * getRndInteger(1, 3);
  const checkin = CHECK_IN_OUT_TIME[getRndInteger(0, CHECK_IN_OUT_TIME.length - 1)];
  const checkout = CHECK_IN_OUT_TIME[getRndInteger(0, CHECK_IN_OUT_TIME.indexOf(checkin))];

  return {
    author: {
      avatar: avatar,
    },

    offer: {
      title: title,
      address: `${latitude}, ${longitude}`,
      price: price,
      type: type,
      rooms: rooms,
      guests: guests,
      checkin: checkin,
      checkout: checkout,
      features: getRndElements(FEATURES),
      description: getRndElements(DESCRIPTION),
      photos: getRndElements(PHOTOS),
    },

    location: {
      lat: latitude,
      lng: longitude,
    },
  };
};

const generateObjects = (numOfObjects) => {
  const postsArr = [];

  for (let count = 1; count <= numOfObjects; count++) {
    postsArr.push(getObject(count));
  }
  return postsArr;
};

generateObjects(10);
