// 5. Demonstrate getElementById() and getElementsByClassName().
const title = document.getElementById('title');
title.textContent = 'Updated by getElementById()';

const items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = 'bold';
}
