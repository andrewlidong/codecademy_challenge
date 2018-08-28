// declineEverything() and acceptEverything()
//
// Part I: Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.
//
// You can test your function when you're ready by passing in the veggies array or by making your own array.
//
// Part II: Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'
//
// You can use any technique you want to accomplish this task. You can test your function when you're ready by passing in the veggies array or by making your own array.

console.log("5. Decline Accept Everything");

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

console.log("5a: declineEverything");

const declineEverything = arr => {
  arr.forEach(el => {
    politelyDecline(el);
  });
};

console.log(declineEverything(veggies));


console.log("5b: acceptEverything");

const acceptEverything = arr => {
  arr.forEach(el => {
    console.log(`Ok, I guess I will eat some ${el}.`);
  });
};

console.log(acceptEverything(veggies));
