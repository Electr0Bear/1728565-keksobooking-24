const filterType = document.querySelector('#housing-type');
const filterPrice = document.querySelector('#housing-price');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterFeatureSection = document.querySelector('.map__features');

const filterValues = {
  type: '',
  price: '',
  rooms: '',
  guests: '',
  features: [],
};

const onClickFilter = (cb) => {
  filterType.addEventListener('change', (evt) => {
    filterValues.type = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterPrice.addEventListener('change', (evt) => {
    filterValues.price = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterRooms.addEventListener('change', (evt) => {
    filterValues.rooms = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterGuests.addEventListener('change', (evt) => {
    filterValues.guests = evt.target.value;
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });

  filterFeatureSection.addEventListener('change', () => {
    const filterFeatureCheckboxesChecked = filterFeatureSection.querySelectorAll('.map__checkbox:checked');
    filterValues.features = Array.from(filterFeatureCheckboxesChecked).map((checkbox) => checkbox.value);
    if (document.querySelector('.leaflet-popup')) {
      document.querySelector('.leaflet-popup').remove();
    }
    cb();
  });
};

const getPostRank = (post) => {
  let rank = 0;
  const {offer} = post;

  if (offer.type === filterValues.type) {
    rank += 1;
  }

  switch (filterValues.price) {
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

  if (offer.rooms === +filterValues.rooms) {
    rank += 1;
  }

  if (offer.guests === +filterValues.guests) {
    rank += 1;
  }

  if (offer.features) {
    filterValues.features.forEach((filterFeature) => {
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

export {comparePosts, onClickFilter, filterValues};
