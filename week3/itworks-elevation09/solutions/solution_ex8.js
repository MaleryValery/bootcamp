// The following exercise contains the following subjects:
// ● functions
// Instruction
// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.
// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)

const worldPopulation = 7900

function percentageOfWorld1(population) {
  return `${(population/worldPopulation * 100).toFixed(1)} %`
}
const russia1 = percentageOfWorld1(143);
const italy1 = percentageOfWorld1(59);
const spain1 = percentageOfWorld1(42);

console.log('russia: ',russia1);
console.log('italy: ', italy1);
console.log('spain: ', spain1);

const percentageOfWorld2 = (population) => `${(population / worldPopulation * 100).toFixed(1)} %`;

const russia2 = percentageOfWorld2(143);
const italy2 = percentageOfWorld2(59);
const spain2 = percentageOfWorld2(42);

console.log('russia: ',russia2);
console.log('italy: ', italy2);
console.log('spain: ', spain2);