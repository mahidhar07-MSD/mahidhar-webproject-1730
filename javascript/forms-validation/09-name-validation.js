// Validate a name field to accept only alphabets.
const nameInput = document.getElementById('name');
nameInput.addEventListener('input', () => {
  const valid = /^[A-Za-z\s]+$/.test(nameInput.value);
  console.log(valid ? 'Valid name' : 'Only alphabets and spaces are allowed');
});
