const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  if (!name.trim()) {
    alert('Name is required');
    return;
  }
  alert('Form submitted successfully');
});
