function validateName(name) {
  return name.trim().length >= 2;
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}
function validatePassword(password) {
  return password.length >= 6;
}
console.log(validateEmail('abc@example.com'));
