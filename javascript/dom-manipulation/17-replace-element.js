// Replace an existing HTML element with a new element.
const oldElement = document.getElementById('oldBox');
const newElement = document.createElement('div');
newElement.textContent = 'Replaced element';
oldElement.replaceWith(newElement);
