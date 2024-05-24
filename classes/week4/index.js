const arr = [1, 2, 4, 5, 7];

const getGreeterNumbers = (arr, num) => {
  return arr.filter((el) => el > num);
};
const getGreeterNumbers2 = (arr, num) => {
  return arr.map((el) => el > num);
};

getGreeterNumbers2(arr, 3);
console.log("ge", getGreeterNumbers2(arr, 3));

const getSum = (arr) => {
  return arr.reduce((acc, item) => (acc += item));
};

getSum(arr);
console.log("getSum(arr): ", getSum(arr));

const getSum2 = (arr) => {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    const currNum = arr[index];
    result += currNum;
  }
  return result;
};
getSum2(arr);
console.log("getSum2(arr): ", getSum2(arr));
