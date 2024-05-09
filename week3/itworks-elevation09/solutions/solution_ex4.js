// The following exercise contains the following subjects:
// ● functions
// Instructions
// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.

const getCircleArea = (radius) => {
  return  (Math.PI* Math.pow(radius, 2)).toFixed(2)
}

console.log(getCircleArea(4))