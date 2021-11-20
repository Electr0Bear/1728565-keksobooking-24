import {setStatus} from './active-elements.js';
import {onSubmitForm} from './form.js';
import {map, putBalloons} from './map.js';
import {getData} from './api.js';
import {onError, onSuccessSubmit, onFailedSubmit} from './api-handlers.js';
import {onClickFilter} from './filter.js';

const DELAY = 500;

setStatus(true);
map.on('load', setStatus(false));

const debounce = (cb, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay);
  };
};

getData((posts) => {
  putBalloons(posts);
  onClickFilter(debounce(() => putBalloons(posts), DELAY));
}, onError);

onSubmitForm(onSuccessSubmit, onFailedSubmit);
