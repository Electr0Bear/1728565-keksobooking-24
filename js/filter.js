const filterType = document.querySelector('#housing-type');
const filterPrice = document.querySelector('#housing-price');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterFeatureSection = document.querySelector('.map__features');

let type = '';
let price = '';
let rooms = '';
let guests = '';
let filterFeatures = [];

const onFilterClick = (cb) => {
  filterType.addEventListener('change', (evt) => {
    type = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterPrice.addEventListener('change', (evt) => {
    price = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterRooms.addEventListener('change', (evt) => {
    rooms = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterGuests.addEventListener('change', (evt) => {
    guests = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterFeatureSection.addEventListener('change', () => {
    const filterFeatureCheckboxesChecked = filterFeatureSection.querySelectorAll('.map__checkbox:checked');
    filterFeatures = Array.from(filterFeatureCheckboxesChecked).map((checkbox) => checkbox.value);
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });
};

const getPostRank = (post) => {
  let rank = 0;
  const {offer} = post;

  if (offer.type === type) {
    rank += 1;
  }

  switch (price) {
    case 'low':
      if (offer.price < 10000) {
        rank += 1;
      }
      break;
    case 'middle':
      if (offer.price >= 10000 && offer.price <= 50000) {
        rank += 1;
      }
      break;
    case 'high':
      if (offer.price >= 50000) {
        rank += 1;
      }
      break;
  }

  if (offer.rooms === +rooms) {
    rank += 1;
  }

  if (offer.guests === +guests) {
    rank += 1;
  }

  if (offer.features) {
    filterFeatures.forEach((filterFeature) => {
      const featureItem = offer.features.some((offerFeature) => filterFeature === offerFeature);
      if (featureItem) {
        rank += 1;
      }
    });
  }

  return rank;
};

const comparePosts = (postA, postB) => {
  const rankA = getPostRank(postA);
  const rankB = getPostRank(postB);

  return rankB - rankA;
};

export {comparePosts, onFilterClick};
