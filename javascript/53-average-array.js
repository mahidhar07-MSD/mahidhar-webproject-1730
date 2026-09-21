const numbers = [10, 20, 30, 40];
const average = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
console.log('Average:', average);
