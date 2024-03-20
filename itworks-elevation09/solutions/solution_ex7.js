// The following exercise contains the following subjects:
// ● Declaring functions 2
// Instruction
// Copy the code below to your computer, answer the
// questions on the file, and submit.

// JavaScript - Declaring Functions
// The following exercise contains the following
// subjects:
// * functions
// Instructions
// * Please reformat the following function
// expressions to IIFE functions.
// * Please reformat the following function
// declarations in two ways, explicit return and implicit
// return functions.

// From function declarations to explicit and implicit return functions (one of each).

const welcome = () => "Welcome to Appleseeds Bootcamp!";

const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// From function expressions to IIFE functions.
(function squareRoot(a) {
  return Math.sqrt(a);
})(4);

const randomNumbers = (function (a, b) { return Math.random() * (a - b) + b })(1,2);
