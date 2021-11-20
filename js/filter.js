const DEFAULT_VALUE = 'any';

const filter = document.querySelector('.map__filters');
const type = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');
const featureSection = document.querySelector('.map__features');
const PriceRanges = {
  any: {
    min: 0,
    max: Infinity,
  },
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 9999,
    max: 50000,
  },
  high: {
    min: 49999,
    max: Infinity,
  },
};

const filterType = ({offer}) => type.value === DEFAULT_VALUE || type.value === offer.type;
const filterRooms = ({offer}) => rooms.value === DEFAULT_VALUE || +rooms.value === offer.rooms;
const filterPrice = ({offer}) => offer.price > PriceRanges[price.value].min && offer.price < PriceRanges[price.value].max;
const filterGuests = ({offer}) => guests.value === DEFAULT_VALUE || +guests.value === offer.guests;
const filterFeatures = ({offer}) => {
  const selectedFeatures = Array.from(featureSection.querySelectorAll('.map__checkbox:checked'));
  if (!offer.features && selectedFeatures.length > 0) {
    return false;
  }
  return selectedFeatures.every((feature) => offer.featues.includes(feature.value));
};

const filterPosts = (posts) => posts.filter((post) => filterType(post) && filterRooms(post) && filterPrice(post) && filterGuests(post) && filterFeatures(post));

const onClickFilter = (cb) => {
  filter.addEventListener('change', () => {
    cb();
  });
  filter.addEventListener('reset', () => {
    cb();
  });
};

export {onClickFilter, filterPosts};
