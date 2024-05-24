// JavaScript – closures
// The following exercise contains the following subjects:
// ● closures
// Instructions
// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.
// Block 1
// var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
// for both lines below passed parameters are useless, they do not affect to result
var firstResult = someFunction(9); // here someFunction will return function otherFunction and we can call firstResult
var result = firstResult(2); // 5 here is calling otherFunction which was written to firstResult and it saved access to the previuos context

// Block 2
// i have no idea what is going on, please explain the right answer
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a); //i would answer 10 because a = 10 overrite var a. but function a hoisted so a now is function which is equal 10 🤯
// so right answer is 1, but i don't understand why clearly

// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i); // 3, 3, 3 because after timeout is over 'i' will equal 3
  };
  setTimeout(log, 100);
}
