function isPalindrome(num) {
  const str = String(num);
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome(121));
console.log(isPalindrome(123));
