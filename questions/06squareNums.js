// squareNums()
//
// Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.
//
// You can test your function when you're ready by passing in the numbers array or by making your own array!
//

console.log("6. SquareNums");

const squareNums = arr => {
  return arr.map(num => toSquare(num));
};

const numbers_2 = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

console.log(numbers_2);
console.log(squareNums(numbers_2));
