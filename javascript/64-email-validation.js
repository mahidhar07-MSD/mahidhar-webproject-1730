const email = 'user@example.com';
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(pattern.test(email) ? 'Valid email' : 'Invalid email');
