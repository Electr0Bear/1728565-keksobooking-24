// import {generatePost} from './advertisment.js';
// import {getObject} from './data.js';
import {setStatus} from './active-elements.js';
import './form.js';
import {map} from './map.js';

// const generateObjects = (numOfObjects) => {
//   const postsArr = [];

//   for (let count = 1; count <= numOfObjects; count++) {
//     postsArr.push(getObject(count));
//   }
//   return postsArr;
// };

// const generatedObjects = generateObjects(10);
// generatePost(generatedObjects[0]);

setStatus(true);
map.on('load', setStatus(false));
