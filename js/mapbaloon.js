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

  const features = offer.features;
  const featureList = post.querySelectorAll('.popup__feature');
  if (!features) {
    post.querySelector('.popup__features').remove();
  } else {
    featureList.forEach((featureItem) => {
      const activeFeatureItem = features.some((feature) =>
        featureItem.classList.contains(`popup__feature--${feature}`));
      if (!activeFeatureItem) {
        featureItem.remove();
      }
    });
  }

  post.querySelector('.popup__description').textContent = offer.description;

  const postPhotosSection = post.querySelector('.popup__photos');
  const photos = offer.photos;
  if (!photos) {
    post.querySelector('.popup__photos').remove();
  } else {
    for (let iterator = 1; iterator < photos.length; iterator++) {
      postPhotosSection.appendChild(post.querySelector('.popup__photo').cloneNode(true));
    }
    const postPhotosArray = post.querySelectorAll('.popup__photo');
    for (let iterator = 0; iterator < postPhotosArray.length; iterator++) {
      postPhotosArray[iterator].src = `${photos[iterator]}`;
    }
  }

  return post;
};

export {
  createBaloon
};
