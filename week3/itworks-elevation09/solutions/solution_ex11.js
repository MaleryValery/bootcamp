// The following exercise contains the following subjects:
// ● Order Of Operation
// ● If statements
// Instructions
// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.

const getAverage = (...score) => {
  return score.reduce((acc, points) => acc += points, 0)/score.length
}

const averageMike = getAverage(89, 120, 103)
const averageJohn = getAverage(116, 94, 123)
const averageMary = getAverage(97, 134, 105)


if (averageMike > averageJohn && averageMike > averageMary) {
  console.log(`Mike is the winner with average score ${averageMike}!`);
} else if (averageJohn > averageMike && averageJohn > averageMary) {
  console.log(`John is the winner  with average score ${averageJohn}!`);
} else if (averageMary > averageMike && averageMary > averageJohn) {
  console.log(`Mary is the winner with average score ${averageMary}!`);
} else {
  console.log("It's a draw!");
}