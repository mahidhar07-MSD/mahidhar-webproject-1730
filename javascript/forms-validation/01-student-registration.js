// 1. Create a student registration form with JavaScript validation.
const form = document.getElementById('studentForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = Number(document.getElementById('age').value);

  if (!name || !email || age < 18) {
    console.log('Validation failed');
    return;
  }

  console.log('Student registered successfully');
});
