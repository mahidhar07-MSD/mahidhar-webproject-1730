// 1. Create a webpage and use JavaScript to add new elements dynamically.
const container = document.getElementById('container');

const newItem = document.createElement('li');
newItem.textContent = 'New list item added dynamically';
container.appendChild(newItem);
