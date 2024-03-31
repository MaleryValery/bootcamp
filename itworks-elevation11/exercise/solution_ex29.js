// Write a function that has one argument, a positive integer.
// Let's call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right-hand side if empty!
// Note:
// Examples:
// steps(2)
// ‘# ‘
// ‘##’
// steps(3)
// ‘# ‘
// ‘## ‘
// ‘###’
// steps(4)
// ‘# ‘
// ‘## ‘
// ‘### ‘
// ‘####’
// Notice that if each step is not populated by a step it should
// consist of empty space. For example, if n = 3:
// steps(3)
// ‘# ‘ ←-- 2 empty spaces
// ‘## ‘ ←-- 1 empty space
// ‘###’
// Ninja:
// You are not allowed to use the repeat method. Use 2 loops
// instead

const printSteps = (number) => {
  let steps = "";
  for (let i = 1; i <= number; i += 1) {
    for (let j = 1; j <= number; j += 1) {
      if (i >= j) {
        steps += "#";
      } else steps += j === number ? " \n" : " ";
    }
  }
  console.log("steps: ", steps);
  return steps;
};

const printSteps1 = (number) => {
  let steps = "";
  for (let i = 1; i <= number; i += 1) {
    steps += "#".repeat(i) + " ".repeat(number - i) + "\n";
  }
  return steps;
};

console.log(printSteps(3));
