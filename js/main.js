import {getObject} from './data.js';

const generateObjects = (numOfObjects) => {
  const postsArr = [];

  for (let count = 1; count <= numOfObjects; count++) {
    postsArr.push(getObject(count));
  }
  return postsArr;
};

generateObjects(10);
