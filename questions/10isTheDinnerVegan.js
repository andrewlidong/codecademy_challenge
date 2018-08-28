// isTheDinnerVegan()
//
// Write a function isTheDinnerVegan() hat takes in an array of food objects in the format:
//
// {name: 'cabbage', source: 'plant' }
// and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
//
// You can test your function when you're ready by passing in the dinner array or by making your own.

console.log("10. Is The Dinner Vegan?");

const isTheDinnerVegan = foodArr => {
  for (let i = 0; i < foodArr.length; i++) {
    let food = foodArr[i];

    if (food.source !== "plant") {
      return false;
    }
  }

  return true;
};

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

console.log(meal);

console.log(isTheDinnerVegan(meal)); // Should return true
