// 12. Create a password show/hide feature.
const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  toggleBtn.textContent = isPassword ? 'Hide' : 'Show';
});
