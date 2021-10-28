// Функция возвращающая случайное целое число в заданном диапазоне
const getRndInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция возвращающая случайное число в заданном диапазоне с указанием количества знаков после запятой
const getRndFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
};

let posts = [{
  author: {
    avatar: 'img/avatars/user{{xx}}.png',
  },

  offer: {
    title: 'заголовок оффера',
    address: '{{location.lat}}, {{location.lng}}',
    price: 5000,
    type: 'flat',
    rooms: 3,
    guests: 2,
    checkin: '12:00',
    checkout: '14:00',
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'хорошая квартира',
    photos: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  },

  location: {
    lat: 35.65000,
    lng: 139.70000,
  },
}, ]

const TITLE_1 = ['Роскошн', 'Просторн', 'Доступн', 'Комфортабельн', 'Элегантн'];
const TITLE_2 = ['дворец', 'квартира', 'дом', 'бунгало', 'номер в отеле'];

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_OUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Новый ремонт', 'Живописный вид', 'Тихий район', 'В шаговой доступности от метро', 'Можно с животными', 'Удобный паркинг', 'Рядом есть парк'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const getPosts = (uniqueObjects) => {
  let post = [];

  // Генерирует числа под ссылки на аватары авторов
  let rndIntArray = [];
  while (rndIntArray.length < uniqueObjects) {
    let rndInt = '' + getRndInteger(1, uniqueObjects);
    if (rndInt < 10) rndInt = '0' + rndInt;
    if (rndIntArray.indexOf(rndInt) === -1) rndIntArray.push(rndInt);
  }



  // Основной цикл генерации объекта
  for (let i = 0; i < uniqueObjects; i++) {

    let latitude = getRndFloat(35.65000, 35.70000, 5);
    let longitude = getRndFloat(139.70000, 139.80000, 5);
    let type = TYPES[getRndInteger(0, 4)];
    let rooms;
    let title = TITLE_1[getRndInteger(0, TITLE_1.length - 1)];
    switch (type) {
      case 'palace':
        rooms = getRndInteger(10, 20);
        title += 'ый' + ' ' + TITLE_2[0];
        break;
      case 'flat':
        rooms = getRndInteger(1, 4);
        title += 'ая' + ' ' + TITLE_2[1];
        break;
      case 'house':
        rooms = getRndInteger(1, 6);
        title += 'ый' + ' ' + TITLE_2[2];
        break;
      case 'bungalow':
        rooms = getRndInteger(1, 2);
        title += 'ое' + ' ' + TITLE_2[3];
        break;
      case 'hotel':
        rooms = getRndInteger(1, 2);
        title += 'ый' + ' ' + TITLE_2[4];
        break;
      default: rooms = 1;
    };
    let price = rooms * getRndInteger(1000, 5000);
    let guests = rooms * getRndInteger(1, 3);
    let checkin = CHECK_IN_OUT_TIME[getRndInteger(0, CHECK_IN_OUT_TIME.length - 1)];
    let checkout = CHECK_IN_OUT_TIME[getRndInteger(0, CHECK_IN_OUT_TIME.indexOf(checkin))];
    let features = [... new Set (Array.from({length: getRndInteger(1, FEATURES.length)}, () => FEATURES[getRndInteger(0, FEATURES.length - 1)]))];
    let description = [... new Set (Array.from({length: getRndInteger(1, DESCRIPTION.length)}, () => DESCRIPTION[getRndInteger(0, DESCRIPTION.length - 1)]))];
    let photos = [... new Set (Array.from({length: getRndInteger(1, PHOTOS.length)}, () => PHOTOS[getRndInteger(0, PHOTOS.length - 1)]))];


    post.push({
      author: {
        avatar: 'img/avatars/user' + rndIntArray[i] + '.png',
      },

      offer: {
        title: title,
        address: latitude + ', ' + longitude,
        price: price,
        type: type,
        rooms: rooms,
        guests: guests,
        checkin: checkin,
        checkout: checkout,
        features: features,
        description: description,
        photos: photos,
      },

      location: {
        lat: latitude,
        lng: longitude,
      },
    });
  }
  return post;
}


console.log(getPosts(10));
