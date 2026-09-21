// 4. Create a signup form with password confirmation.
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

function validateSignup() {
  if (password.value !== confirmPassword.value) {
    console.log('Passwords do not match');
    return false;
  }
  console.log('Passwords match');
  return true;
}
