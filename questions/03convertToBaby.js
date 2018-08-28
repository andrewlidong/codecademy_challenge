// convertToBaby()
//
// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '. Do not use .map().
//

console.log("3. Convert To Baby");

const convertToBaby = arr => {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];

    arr[i] = `baby ${str}`;
  }

  return arr;
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
