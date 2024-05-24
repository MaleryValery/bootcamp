// The following exercise contains the following subjects:
// ● reduce method
// Instructions
// Write the following functions using the reduce built-in function.
// 1. max
// 2. the sum of even numbers
// 3. average

const max = [1, 3, 4, 5, 6].reduce((acc, item) => (acc > item ? acc : item), 0);
console.log("max: ", max);
const sum = [1, 2, 3, 4].reduce((acc, item) => (acc += item), 0);
console.log("sum: ", sum);
const average = [1, 2, 3, 4].reduce((acc, item, i, arr) => {
  if (i === arr.length - 1) {
    return (acc + item) / arr.length;
  }
  return (acc += item);
}, 0);
console.log("average: ", average);
