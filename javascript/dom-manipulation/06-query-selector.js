// 6. Demonstrate querySelector() and querySelectorAll().
const firstBox = document.querySelector('.box');
firstBox.style.background = '#bbf7d0';

const allBoxes = document.querySelectorAll('.box');
allBoxes.forEach((box, index) => {
  box.textContent = `Box ${index + 1}`;
});
