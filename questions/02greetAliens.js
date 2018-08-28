// greetAliens()
//
// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array. Do not use .forEach().
//
// The greeting should take the following format: "Oh powerful [stringElement], we humans offer our unconditional surrender!"

console.log("2. Greet Aliens");

const greetAliens = strArr => {
  for (let i = 0; i < strArr.length; i++) {
    let alienName = strArr[i];

    console.log(
      `Oh powerful ${alienName}, we humans offer our unconditional surrender!`
    );
  }
};


const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!
