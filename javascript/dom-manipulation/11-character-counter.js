// 11. Create a live character counter for a textarea.
const textArea = document.getElementById('message');
const counter = document.getElementById('counter');

textArea.addEventListener('input', () => {
  counter.textContent = `${textArea.value.length} characters`;
});
