// import {generatePost} from './advertisment.js';
// import {objects} from './data.js';
import {setStatus} from './active-elements.js';
import './form.js';
import {map} from './map.js';

setStatus(true);
map.on('load', setStatus(false));
// console.log(objects);

// const generateObjects = (numOfObjects) => {
//   const postsArr = [];

//   for (let count = 1; count <= numOfObjects; count++) {
//     postsArr.push(getObject(count));
//   }
//   return postsArr;
// };

// const generatedObjects = generateObjects(10);
// generatePost(generatedObjects[0]);
