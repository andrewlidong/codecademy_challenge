// justCoolStuff()
//
// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.
//
// You can test your function when you're ready by passing in the myStuff and coolStuff arrays or by making arrays of your own.

// justCoolStuff(arr1, arr2); // Should return ['this']

console.log("9. Just Cool Stuff");

const justCoolStuff = (strArr1, strArr2) => {
  return strArr1.filter(el => strArr2.includes(el));
};



let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

console.log(arr1);
console.log(arr2);
console.log(justCoolStuff(arr1, arr2));

// there is a typo in the sample test code
