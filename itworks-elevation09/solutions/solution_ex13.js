// The following exercise contains the following subjects:
// ● integers
// Instructions
// Create a JS function to determine whether or not a given year
// is a leap year. The function should take a year as an argument:
// 1. Determine whether or not it is a leap year
// ● If the given year is a leap year, the program should print "It
// is indeed a leap year", otherwise the program will print
// "This is not a leap year."
// Help:
// every year that is divisible by 4 is a leap year except for the
// ones that are also divisible by 100 unless it is divisible by 400.
// Example: 2012 is the leap year 2100 is not But 2400 is.

const leapYear = (year) => {
  if (!(year % 4)) {
    if (year % 100 || !(year % 400)) {
      console.log(`leap year ${year}`);
    }
  }
};

leapYear(1989);
