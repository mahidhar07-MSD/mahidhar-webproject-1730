// 7. Create a keyboard-controlled webpage/game.
let position = 0;
const player = document.getElementById('player');

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    position += 20;
  } else if (event.key === 'ArrowLeft') {
    position -= 20;
  }

  player.style.transform = `translateX(${position}px)`;
});
