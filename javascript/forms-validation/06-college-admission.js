// 6. Create a college admission form with JavaScript validation.
const admissionForm = document.getElementById('admissionForm');

admissionForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const marks = Number(document.getElementById('marks').value);

  if (!name || marks < 50) {
    console.log('Admission failed');
    return;
  }

  console.log('Admission accepted');
});
