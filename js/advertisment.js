const typeOfEstate = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const map = document.querySelector('#map-canvas');
const template = document.querySelector('#card').content.querySelector('.popup');

const generatePost = (object) => {
  const {author, offer} = object;
  const newPost = template.cloneNode(true);
  newPost.querySelector('.popup__avatar').src = author.avatar;
  newPost.querySelector('.popup__title').textContent = offer.title;
  newPost.querySelector('.popup__text--address').textContent = offer.address;
  newPost.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  newPost.querySelector('.popup__type').textContent = typeOfEstate[offer.type];
  offer.rooms === 1 ?
    newPost.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнатa для ${offer.guests} гостей` :
    newPost.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  if (offer.rooms >= 5) {
    newPost.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнат для ${offer.guests} гостей`;
  }
  newPost.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const features = offer.features;
  const featureList = newPost.querySelectorAll('.popup__feature');
  featureList.forEach((featureItem) => {
    const activeFeatureItem = features.some((feature) =>
      featureItem.classList.contains(`popup__feature--${feature}`));
    if (!activeFeatureItem) {
      featureItem.remove();
    }
  });

  newPost.querySelector('.popup__description').textContent = offer.description;

  const postPhotosSection = newPost.querySelector('.popup__photos');
  const photos = offer.photos;
  for (let iterator = 1; iterator < photos.length; iterator++) {
    postPhotosSection.appendChild(newPost.querySelector('.popup__photo').cloneNode(true));
  }
  const postPhotosArray = newPost.querySelectorAll('.popup__photo');
  for (let iterator = 0; iterator < postPhotosArray.length; iterator++) {
    postPhotosArray[iterator].src = `${photos[iterator]}`;
  }

  // Array.from(newPost.children).forEach((child) => {
  //   if (child.innerHTML.trim() === '') {
  //     child.remove();
  //   }
  // });

  map.appendChild(newPost);
};

export {generatePost};
