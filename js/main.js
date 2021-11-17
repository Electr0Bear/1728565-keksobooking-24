import {setStatus} from './active-elements.js';
import {onSubmitForm, onClickResetBtn} from './form.js';
import {map, putBalloons} from './map.js';
import {getData} from './api.js';
import {onError, onSuccessSubmit, onFailedSubmit} from './api-handlers.js';
import {onClickFilter} from './filter.js';

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
  onClickFilter(debounce(() => putBalloons(posts), DELAY));
  onClickResetBtn(() => putBalloons(posts));
}, onError);

onSubmitForm(onSuccessSubmit, onFailedSubmit);
