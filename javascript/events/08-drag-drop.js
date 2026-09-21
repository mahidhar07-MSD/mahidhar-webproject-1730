// 8. Create a drag-and-drop application using JavaScript.
const draggable = document.getElementById('draggable');
const dropZone = document.getElementById('drop-zone');

draggable.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', 'dragged-item');
});

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();
  console.log('Dropped item');
});
