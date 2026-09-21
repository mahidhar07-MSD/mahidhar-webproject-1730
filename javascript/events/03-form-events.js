// 3. Demonstrate form events such as submit, change, focus, and blur.
const form = document.getElementById('studentForm');
const input = document.getElementById('name');

input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input blurred'));
input.addEventListener('change', () => console.log('Value changed'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');
});
