import {generatePost} from './advertisment.js';

const generateObjects = (numOfObjects) => {
  const postsArr = [];

  for (let count = 1; count <= numOfObjects; count++) {
    postsArr.push(generatePost(count));
  }
  return postsArr;
};

generateObjects(1);
