import {setStatus} from './active-elements.js';
import {formOnSubmit} from './form.js';
import {map, putBalloons} from './map.js';
import {getData} from './api.js';

setStatus(true);
map.on('load', setStatus(false));

getData((posts) => {
  putBalloons(posts.slice(0, 10));
});

formOnSubmit();
