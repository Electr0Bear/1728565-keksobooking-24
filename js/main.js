import {setStatus} from './active-elements.js';
import {formOnSubmit} from './form.js';
import {map, putBalloons} from './map.js';
import {getData} from './api.js';
import {onError, onSuccessSubmit, onFailedSubmit} from './api-handlers.js';
// import './filter.js';
import {onFilterClick} from './filter.js';

setStatus(true);
map.on('load', setStatus(false));

getData((posts) => {
  putBalloons(posts);
  onFilterClick(() => putBalloons(posts));
}, onError);

formOnSubmit(onSuccessSubmit, onFailedSubmit);
