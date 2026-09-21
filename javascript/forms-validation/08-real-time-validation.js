// 8. Create a real-time form validation system.
const username = document.getElementById('username');
const status = document.getElementById('status');

username.addEventListener('input', () => {
  const valid = username.value.length >= 4;
  status.textContent = valid ? 'Valid username' : 'Username must be at least 4 characters';
  status.style.color = valid ? 'green' : 'red';
});
