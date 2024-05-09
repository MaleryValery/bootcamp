// The following exercise contains the following subjects:
// ● callback functions
// Instructions
// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function

const logToConsole = (string) => {
  console.log(string);
};

const isString = (string, callBack) => {
  if (typeof string === "string") callBack(string);
};

isString("sss", logToConsole);

const addDashes = (str = "") => {
  return str.split(" ").join("-");
};

const firstWordUpperCase = (string, callBack) => {
  const capitalize = string
    .toLowerCase()
    .split(" ")
    .map((el, i) => (i === 0 ? el[0].toUpperCase() + el.slice(1) : el))
    .join(" ");
  const result = callBack(capitalize);

  console.log("result: ", result);
  return result;
};
firstWordUpperCase("tHe function will capitalize the first word in the sentence", addDashes);

firstWordUpperCase("tHe function will", logToConsole);

const addFive = (callback) => {
  const str = "ill capitalize the first";
  const result = callback(str) + "5555555";
  console.log("result: ", result);
  return result;
};
addFive(addDashes);
