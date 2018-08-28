// sortYears()
//
// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.
//
// You can test your function when you're ready by passing in the years array or by making your own array of years.
//
// const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
//
// console.log(shoutGreetings(greetings))
// // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

console.log("8. Sort Years");

// There is a typo in the question prompt

const sortYears = yrArr => {
  return yrArr.sort((first, second) => second - first);
};

const years = [1994, 2001, 1776, 1984, 2018, 3030];

console.log(years);
console.log(sortYears(years));
