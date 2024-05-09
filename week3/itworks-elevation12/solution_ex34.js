// JavaScript – average
// The following exercise contains the following subjects:
// ● debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
calcAverage([85, 90, 92]);
console.log("calcAverage([85, 90, 92]);: ", calcAverage([85, 90, 92]));

// 1. First find the line that contains the problem. Write it down.
//  1.1 line 10, var sum is not defined
//  1.2 line 12 the calculation is wrong to find the average we need to get sum of the array elements and divide it by the length
// 2. Which debug method did you use to find the bug?
//  2.1 brackpoint on line 10, var sum is not defined
// 3. Explain the bug in your own words.
//  3.1 line 10 needs to initialisation of the sum, because in another case it is undefined, undefined + number = NaN
//  3.2 fix calculation of average according to naming of the function
// 4. Fix the code and submit it all.
