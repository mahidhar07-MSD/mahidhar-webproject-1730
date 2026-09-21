// 1. Demonstrate mouse events using JavaScript.
const box = document.getElementById('box');

box.addEventListener('mouseover', () => {
  console.log('Mouse over');
});

box.addEventListener('mouseout', () => {
  console.log('Mouse out');
});

box.addEventListener('mousedown', () => {
  console.log('Mouse down');
});

box.addEventListener('mouseup', () => {
  console.log('Mouse up');
});
