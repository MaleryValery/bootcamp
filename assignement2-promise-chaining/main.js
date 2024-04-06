// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result of three arithmetic operations in sequence. Start with a number, then add 5, multiply by 3, and finally subtract 2.
const printMathOperations = (num) => {
  return Promise.resolve(num)
    .then((num) => {
      const res = num + 5;
      console.log("num + 5:", res);
      return res;
    })
    .then((newNum) => {
      const res = newNum * 3;
      console.log("num * 3:", res);
      return res;
    })
    .then((newNum) => {
      const res = newNum - 2;
      console.log("num -2:", res);
      return res;
    })
    .catch((err) => console.log("err: ", err));
};
printMathOperations(1);
// Exercise 2: String Manipulation
// Write a promise chain that takes a string, converts it to uppercase, then reverses it, and finally appends the string "-finished" at the end. Log the final result.
// Use `then` for every phase

const transformString = (str) => {
  return Promise.resolve(str)
    .then((str) => str.toUpperCase())
    .then((str) => str.split("").reverse().join(""))
    .then((str) => str + "-finished")
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
};

transformString("fff");

// Exercise 3: Array Filtering and Mapping
// Write a function compareToNum that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10 (reject otherwise)

const compareToNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num < 10 || num > 10) resolve();
    else reject();
  });
};
compareToNum(11);
