function validateForm() {
  const name = document.getElementById('name').value;
  return name.trim() !== '';
}
console.log(validateForm());
