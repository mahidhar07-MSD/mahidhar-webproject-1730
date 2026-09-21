const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(arr2, sum(1, 2, 3, 4));
