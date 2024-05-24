// JavaScript – functions
// The following exercise contains the following subjects:
// ● Debugging
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  console.log("sum: ", sum);
  return sum;
}
getSum([1, 2, 3], [5, 66, 23]);

// 1. First, find the line that contains the problem. Write it down.
//  1.1. line 18 needs comma to separate arguments
//  1.2. lines 18 second argument has extra brackets, so js will take it as one array element and takes only last 23 number
//  1.3. lines 20, 22 const variable cannot be changed
// 2. Which debug method did you use to find the bug?
//  2.1 console log to figure out what data was was passed us arguments
//  2.2 open debug mode in vscode and make brakepoint on line 10, got arr1 arr2 undefined
//  2.3 open debug mode in vscode and make brakepoint on line 12, got error const variable cannot be changed
//  2.3 open debug mode in vscode and make breakpoint on line 14, saw what loop takes as the first element of arr2
// 3. Explain the bug in your own words.
//  3.1 arguments need a comma to separate arrays,
//  3.2 in the example was passed second argument that will not work, extra brakets should have to be removed
//  3.3 const sum should be changed to let sum
//  3.4 i personally wish add the return to actually get sum, but not necessary
// 4. Fix the code and submit it all.
