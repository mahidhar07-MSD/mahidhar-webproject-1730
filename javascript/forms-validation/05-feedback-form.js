// 5. Create a feedback form with validation.
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || message.length < 10) {
    console.log('Feedback is invalid');
    return;
  }

  console.log('Feedback submitted successfully');
});
