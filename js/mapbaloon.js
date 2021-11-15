const typeOfEstate = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

// const map = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content.querySelector('.popup');

const createBaloon = (object) => {
  const {author, offer} = object;
  const post = template.cloneNode(true);
  post.querySelector('.popup__avatar').src = author.avatar;
  post.querySelector('.popup__title').textContent = offer.title;
  post.querySelector('.popup__text--address').textContent = offer.address;
  post.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  post.querySelector('.popup__type').textContent = typeOfEstate[offer.type];
  post.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат для ${offer.guests} гостей`;
  post.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  post.querySelector('.popup__description').textContent = offer.description;

  return post;
};

export {createBaloon};
