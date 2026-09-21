// 7. Create a number guessing game.
const target = 7;
const guess = 5;

if (guess === target) {
  console.log('Correct guess');
} else if (guess < target) {
  console.log('Too low');
} else {
  console.log('Too high');
}
