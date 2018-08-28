// shoutGreetings()
//
// Write a function, shoutGreetings(), that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'
//
// You can use any technique you want to accomplish this task. You can test your function when you're ready by passing in the greetings array or by making your own array.
//

console.log("7. Shout Greetings");

const shoutGreetings = strArr => {
  let returnArr = [];

  for (let i = 0; i < strArr.length; i++) {
    str = strArr[i];

    returnArr.push(`${str.toUpperCase()}!`);
  }

  return returnArr;
};

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
