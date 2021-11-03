import {generatePost} from './advertisment.js';
import {getObject} from './data.js';

const generateObjects = (numOfObjects) => {
  const postsArr = [];

  for (let count = 1; count <= numOfObjects; count++) {
    postsArr.push(getObject(count));
  }
  return postsArr;
};

const generatedObject = generateObjects(1);
generatePost(generatedObject[0]);
