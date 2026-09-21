// 13. Create a random password generator.
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
let password = '';
for (let i = 0; i < 12; i++) {
  password += chars[Math.floor(Math.random() * chars.length)];
}
console.log('Generated password:', password);
