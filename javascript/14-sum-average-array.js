const arr = [10, 20, 30, 40];
const sum = arr.reduce((total, value) => total + value, 0);
const average = sum / arr.length;
console.log('Sum:', sum);
console.log('Average:', average);
