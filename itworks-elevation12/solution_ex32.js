// JavaScript – get sum
// The following exercise contains the following subjects:
// ● find smallest
// Instructions
// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
function findSmallest(a, b, c) {
  if (a > c && b > c) {
    return c;
  } else if (c > a && b > a) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);

// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//    1.1 line 16 Uncaught ReferenceError ReferenceError: findSmalest is not defined
//    1.2 line 8, 10 wrong conditions
// 2. Which debug method did you use to find the bug?
//    2.1 breakpoint on line 8, get reference error
//    2.2 breakpoint on lines 8, 10, conditions did not work
//    2.3 wrong condition in line 10 in case return a
// 3. Explain the bug in your own words.
// There was a typo in the function name, so it caused a reference error.
// wrong conditions. in case cheaking several options need to use logical operation && or || depends on what is needed to check
// 4. Fix the code and submit it all.
