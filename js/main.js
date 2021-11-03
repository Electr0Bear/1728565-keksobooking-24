import {generatePost} from './advertisment.js';

const generatePosts = (numOfObjects) => {
  const postsArr = [];

  for (let count = 1; count <= numOfObjects; count++) {
    postsArr.push(generatePost(count));
  }
  return postsArr;
};

generatePosts(1);
