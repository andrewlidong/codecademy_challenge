// Fix The Broken Code!
//
// We wrote a function, smallestPowerOfTwo(), which takes in an array.
//
// Within our function, we create a new array results. We loop through the argument array and push in the smallest power of two which is greater than the current element.
//
// It's not doing what we want. Can you fix our code, please?
//

console.log("4. Fix The Broken Code");

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    // The error was in using the variable i twice.  
    multiple = 1;
    while (multiple < number) {
      multiple = multiple * 2;
    }
    results.push(multiple);
  }
  return results;
}

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
