// reverseArray()
//
// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. Do not use built-in methods (e.g., .reverse()).
//
// const sentence = ['sense.','make', 'all', 'will', 'This'];
// reverseArray(sentence);
// // Should return ['This', 'will', 'all', 'make', 'sense.'];

const reverseArray = arr => {
  let returnArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    returnArr.push(arr[i]);
  }

  return returnArr;
};
