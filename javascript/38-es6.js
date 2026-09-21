let name = 'Rahul';
const age = 22;
const message = `Hello ${name}, age ${age}`;
const user = { name, age };
const { name: userName } = user;
console.log(message, userName);
