// Validate an age field using JavaScript.
const ageInput = document.getElementById('age');
ageInput.addEventListener('input', () => {
  const age = Number(ageInput.value);
  console.log(age >= 18 ? 'Age valid' : 'Age must be 18 or above');
});
