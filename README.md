# CodeAcademy JavaScript Coding Challenges

## About

Included is a series of 13 completed code challenges for the Codeacademy Coach position.  All code is written in JavaScript and includes console tests.  The first 7 challenges are mandatory, the following 4 are bonuses.  Below is the prompt.  To try it out, clone the repo and open index.html.  

## Mandatory Code Challenges (1-7)

1) **reverseArray()**

   Write a function, `reverseArray()`, that takes in an array as an argument and returns a new array with the elements in the reverse order. **Do not use built-in methods ([e.g., `.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)).**
   ```
   const sentence = ['sense.','make', 'all', 'will', 'This'];
   reverseArray(sentence);
   // Should return ['This', 'will', 'all', 'make', 'sense.'];
   ```

2) **greetAliens()**

   Write a function, `greetAliens()`, that takes in an array of strings and uses a `for` loop to print a greeting with each string in the array. **Do not use `.forEach()`.**
   <br><br>The greeting should take the following format:
"Oh powerful `[stringElement]`, we humans offer our unconditional surrender!"
   ```
   const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

   greetAliens(aliens);
   // Should print:
   // Oh powerful Blorgous, we humans offer our unconditional surrender!
   // Oh powerful Glamyx, we humans offer our unconditional surrender!
   // Oh powerful Wegord, we humans offer our unconditional surrender!
   // Oh powerful SpaceKing, we humans offer our unconditional surrender!
   ```

3) **convertToBaby()**

   Write a function, `convertToBaby()`, that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with `'baby '`. **Do not use `.map()`.**

   ```
   const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

   convertToBaby(animals);
   // Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
   ```

4) **Fix The Broken Code!**

   We wrote a function, `smallestPowerOfTwo()`, which takes in an array.

   Within our function, we create a new array results. We loop through the argument array and push in the smallest power of two which is greater than the current element.

   It's not doing what we want. Can you fix our code, please?

   ```
    const numbers = [5, 3, 9, 30];

    const smallestPowerOfTwo = arr => {
          let results = [];
          // The 'outer' for loop - loops through each element in the array
          for (let i = 0; i < arr.length; i++) {
                number = arr[i];

                // The 'inner' while loop - searches for smallest power of 2 greater than the given number
                i = 1;
                while (i < number) {
                      i = i * 2;
                }
                results.push(i);
          }
          return results
    }

    console.log(smallestPowerOfTwo(numbers))
    // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
    ```

5) **declineEverything() and acceptEverything()**

      _**Part I:**_
      Write a function `declineEverything()` that takes in an array of strings and, using `.forEach()`, loops through each element in the array and calls `politelyDecline()` with each of them.

      You can test your function when you're ready by passing in the veggies array or by making your own array.

      ```
      const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

      const politelyDecline = (veg) => {
            console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
      }
      ```
    _**Part II:**_
    Now we need to get healthy! Write a function `acceptEverything()` that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: `'Ok, I guess I will eat some [element].'`

    You can use any technique you want to accomplish this task. You can test your function when you're ready by passing in the veggies array or by making your own array.

6) **squareNums()**

   Write a function, `squareNums()`, that takes in an array of numbers and, using `.map()`, returns an array with the square of each of the elements of that array.

   You can test your function when you're ready by passing in the `numbers` array or by making your own array!

   ```
   const numbers = [2, 7, 9, 171, 52, 33, 14]

   const toSquare = num => num * num
   ```

7) **shoutGreetings()**

   Write a function, `shoutGreetings()`, that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: `'heya'` will become `'HEYA!'`

   You can use any technique you want to accomplish this task. You can test your function when you're ready by passing in the `greetings` array or by making your own array.

   ```
   const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

   console.log(shoutGreetings(greetings))
   // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
   ```

## Bonus Code Challenges (8-11)

8) **sortYears()**

   Write a function `sortYears()` that takes in an array of years, and, using the built-in `.sort()` method, returns that array with the years sorted in descending order.

   You can test your function when you're ready by passing in the years array or by making your own array of years.

   ```
   const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

   console.log(shoutGreetings(greetings))
   // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
   ```

9) **justCoolStuff()**

   Write a function `justCoolStuff()` that takes in two arrays of strings, and, using the built-in `.filter()` method, returns an array with the items that are present in both arrays.

   ```
   let arr1 = ['this', 'not this', 'nor this"];
   let arr1 = ['thing 1', 'thing 2', 'this'];

   justCoolStuff(arr1, arr2); // Should return ['this']
   ```

   You can test your function when you're ready by passing in the `myStuff` and `coolStuff` arrays or by making arrays of your own.

10) **isTheDinnerVegan()**

     Write a function `isTheDinnerVegan()` hat takes in an array of food objects in the format:

     ```
     {name: 'cabbage', source: 'plant' }
     ```

     and returns a boolean value based on whether or not every item in the array has entirely `plant`-based origins.

     ```
     const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

     isTheDinnerVegan(meal); // Should return true
     ```

     You can test your function when you're ready by passing in the `dinner` array or by making your own.

11) **dogFactory()**

     Write a function, `dogFactory()`. It should:
     have 3 parameters: `name`, `breed`, and `weight`
     * expect `weight` to be a number
     * expect `name` and `breed` to be strings
     * return an object
     * have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

     ```
     dogFactory('Joe', 'Pug', 27)
     // Should return { name: 'Joe', breed: 'Pug', weight: 27 }
     ```
