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

const compareToNum = ({ num, isAboveNum }) => {
  return new Promise((resolve, reject) => {
    if (num < isAboveNum) resolve();
    else reject();
  });
};
compareToNum({ num: 10, isAboveNum: 5 });

// Exercise 4: Delayed Greetings
// Simulate a delayed greeting with promises. First, wait 2 seconds, then log "Hello", wait another second, and log "World!". Each step should be done in a separate .then().

const delayGreeting = (secDelay) => {
  return new Promise((resolve) => setTimeout(resolve, secDelay));
};

delayGreeting(2000)
  .then(() => {
    console.log("Hello");
    return delayGreeting(1000);
  })
  .then(() => {
    console.log("World!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   Exercise 5: Error Handling
// Create a promise chain that attempts to parse JSON data. Use a try/catch block within a .then() method to handle JSON parsing errors. If successful, log the parsed object; if an error occurs, log "Invalid JSON".

const jsonData = '{"name": "myname", "age": 18}';

const parseJsonData = (json) => {
  return new Promise((resolve) => resolve(json));
};

parseJsonData(jsonData).then((data) => {
  try {
    const jsonData = JSON.parse(data);
    console.log("jsonData: ", jsonData);
    return jsonData;
  } catch (err) {
    console.log("cannot parse");
  }
});
