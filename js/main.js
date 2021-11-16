import {setStatus} from './active-elements.js';
import {formOnSubmit} from './form.js';
import {map, putBaloons, putUserBaloon} from './map.js';
import {getData} from './api.js';

setStatus(true);
map.on('load', setStatus(false));

getData((posts) => {
  putBaloons(posts.slice(0, 10));
});

formOnSubmit();
// formOnSubmit((post) => {
//   putUserBaloon(post);
// });
