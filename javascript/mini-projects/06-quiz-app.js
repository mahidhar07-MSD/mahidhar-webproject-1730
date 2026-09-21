// 6. Create a quiz application.
const questions = [
  { question: 'What does HTML stand for?', answer: 'HyperText Markup Language' },
  { question: 'What does CSS stand for?', answer: 'Cascading Style Sheets' }
];

let score = 0;
questions.forEach(({ answer }) => {
  if (answer === 'HyperText Markup Language') score += 1;
});

console.log('Score:', score);
