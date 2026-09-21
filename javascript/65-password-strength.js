const password = 'Abc123!';
const strong = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
console.log(strong ? 'Strong password' : 'Weak password');
