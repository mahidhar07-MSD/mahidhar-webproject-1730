// 3. Create a password strength checker.
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', () => {
  const value = passwordInput.value;
  let strength = 'Weak';

  if (value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value)) {
    strength = 'Strong';
  } else if (value.length >= 6) {
    strength = 'Medium';
  }

  console.log('Password strength:', strength);
});
