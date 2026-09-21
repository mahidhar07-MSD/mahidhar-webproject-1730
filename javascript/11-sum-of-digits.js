let num = 1234;
let sum = String(num)
  .split('')
  .reduce((total, digit) => total + Number(digit), 0);
console.log('Sum of digits:', sum);
