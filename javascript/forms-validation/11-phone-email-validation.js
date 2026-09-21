// Validate a mobile phone number and email address.
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

phoneInput.addEventListener('input', () => {
  console.log(/^\d{10}$/.test(phoneInput.value) ? 'Valid phone' : 'Invalid phone number');
});

emailInput.addEventListener('input', () => {
  console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) ? 'Valid email' : 'Invalid email');
});
