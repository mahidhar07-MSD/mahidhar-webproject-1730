// 7. Display validation error messages dynamically without reloading the page.
const emailInput = document.getElementById('email');
const errorBox = document.getElementById('error');

emailInput.addEventListener('input', () => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  errorBox.textContent = valid ? 'Valid email' : 'Please enter a valid email';
});
