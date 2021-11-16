import {setStatus} from './active-elements.js';
import './form.js';
import {map} from './map.js';

setStatus(true);
map.on('load', setStatus(false));
