import {setStatus} from './active-elements.js';
import {formOnSubmit} from './form.js';
import {map, putBalloons} from './map.js';
import {getData} from './api.js';
import {onError, onSuccessSubmit, onFailedSubmit} from './api-handlers.js';
import {onFilterClick} from './filter.js';

setStatus(true);
map.on('load', setStatus(false));

const DELAY = 500;

const debounce = (cb, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
};

getData((posts) => {
  putBalloons(posts);
  onFilterClick(debounce(() => putBalloons(posts), DELAY));
}, onError);

formOnSubmit(onSuccessSubmit, onFailedSubmit);
