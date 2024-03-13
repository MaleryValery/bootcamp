// The following exercise contains the following subjects:
// ● for loop
// Instructions
// You are given two arrays:
const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Ice-cream","Pizza",
"Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const compareArray = (arr1, arr2) => {
  const equalItems =[]
  for (let i = 0; i < arr1.length; i+=1){
    for (let j = 0; j < arr2.length; j += 1) { 
      if (arr1[i] === arr2[j] && !equalItems.includes(arr2[j]))
      equalItems.push(arr2[j])
    }
  }
  return equalItems  
}

compareArray(food, food1)