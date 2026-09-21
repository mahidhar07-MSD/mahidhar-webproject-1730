// 2. Create a login form with username and password validation.
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username.length < 3 || password.length < 6) {
    console.log('Invalid login details');
    return;
  }

  console.log('Login successful');
});
