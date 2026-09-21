// 6. Demonstrate event delegation.
const list = document.getElementById('list');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('Clicked item:', event.target.textContent);
  }
});
