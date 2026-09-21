// 2. Demonstrate keyboard events using JavaScript.
window.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key);
});

window.addEventListener('keyup', (event) => {
  console.log('Key released:', event.key);
});
