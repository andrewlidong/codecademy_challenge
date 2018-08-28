// dogFactory()
//
// Write a function, dogFactory(). It should: have 3 parameters: name, breed, and weight
//
// expect weight to be a number
// expect name and breed to be strings
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

console.log("11. Dog Factory");

const dogFactory = (name, breed, weight) => {
  return { name, breed, weight };
};

console.log(dogFactory('Joe', 'Pug', 27));
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
