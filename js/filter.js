const filterType = document.querySelector('#housing-type');
const filterPrice = document.querySelector('#housing-price');
const filterRooms = document.querySelector('#housing-rooms');
const filterGuests = document.querySelector('#housing-guests');
const filterFeatureSection = document.querySelector('.map__features');

let type = '';
let price = '';
let rooms = '';
let guests = '';
let features = [];

const onFilterClick = (cb) => {
  filterType.addEventListener('change', (evt) => {
    type = evt.target.value;
    cb();
  });

  filterPrice.addEventListener('change', (evt) => {
    price = evt.target.value;
    cb();
  });

  filterRooms.addEventListener('change', (evt) => {
    rooms = evt.target.value;
    cb();
  });

  filterGuests.addEventListener('change', (evt) => {
    guests = evt.target.value;
    cb();
  });

  filterFeatureSection.addEventListener('change', () => {
    const filterFeatureCheckboxesChecked = filterFeatureSection.querySelectorAll('.map__checkbox:checked');
    features = Array.from(filterFeatureCheckboxesChecked).map((checkbox) => checkbox.value);
  });
};

const getPostRank = (post) => {
  let rank = 0;
  const {offer} = post;

  if (offer.type === type) {
    rank += 1;
  }

  if (offer.rooms === +rooms) {
    rank += 1;
  }

  if (offer.guests === +guests) {
    rank += 1;
  }

  return rank;
};

const comparePosts = (postA, postB) => {
  const rankA = getPostRank(postA);
  const rankB = getPostRank(postB);

  return rankB - rankA;
};

export {comparePosts, onFilterClick};
