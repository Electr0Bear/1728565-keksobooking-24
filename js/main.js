import {setStatus} from './active-elements.js';
import './form.js';
import {map, putBaloons} from './map.js';
import {getData} from './api.js';

setStatus(true);
map.on('load', setStatus(false));

getData((posts) => {
  putBaloons(posts.slice(0, 10));
});
