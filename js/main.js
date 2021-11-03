import {generatePost} from './advertisment.js';
import {getObject} from './data.js';

const generatePosts = (numOfObjects) => {
  const postsArr = [];

  for (let count = 1; count <= numOfObjects; count++) {
    postsArr.push(generatePost(getObject(count)));
  }
  return postsArr;
};

generatePosts(1);
