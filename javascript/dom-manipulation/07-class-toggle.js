// 7. Create a program to create and remove CSS classes dynamically.
const element = document.getElementById('demo');

element.classList.add('highlight');
setTimeout(() => element.classList.remove('highlight'), 2000);
