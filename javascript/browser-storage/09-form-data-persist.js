// Save form data automatically using localStorage.
const form = document.getElementById('form');
form.addEventListener('input', () => {
  localStorage.setItem('formData', JSON.stringify({
    value: form.value
  }));
});
