// Create a show/hide content button.
const content = document.getElementById('toggleContent');
content.style.display = 'none';

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});
