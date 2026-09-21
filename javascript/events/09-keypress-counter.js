// Create a program that counts the number of keyboard key presses.
let count = 0;
window.addEventListener('keydown', () => {
  count += 1;
  console.log('Key press count:', count);
});
