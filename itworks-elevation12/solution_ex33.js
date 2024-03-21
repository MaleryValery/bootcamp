// JavaScript – sum of even
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your
// eyes but to use the debugging tools we've learned!
// What is wrong with this code?

// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
function getSumOfEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    // if (!((i + 1) % 2)) sum += arr[i];
    if (i % 2) sum += arr[i];
  }
  return sum;
  // return arr.reduce((acc, el, i) => (acc += i % 2 ? el : 0), 0);
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);: ", getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 1. First, find the line that contains the problem. Write it down.
//  1.1 line 13 in the square brakets even value insted of index.
// 2. Which debug method did you use to find the bug?
//  2.1 breakpoint on line 13, get NaN
// 3. Explain the bug in your own words.
//
//  3.1 array indexes are 0 based so arr[10] is out of length the array
//  3.2 in case sum even cells need to use arr[i+1] or opposite odd index, so as result will be even cell number
//  3.3 instead of manual sum array items need to use loop or reduce array method
// 4. Fix the code and submit it all.
