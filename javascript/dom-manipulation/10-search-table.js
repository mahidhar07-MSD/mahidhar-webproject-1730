// 10. Create a program to search/filter table records.
const students = [
  { name: 'Alice', course: 'Web Design' },
  { name: 'Bob', course: 'JavaScript' },
  { name: 'Charlie', course: 'Database' }
];

const searchInput = document.getElementById('search');
const tbody = document.getElementById('table-body');

function renderTable(filterText = '') {
  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(filterText.toLowerCase())
  );

  tbody.innerHTML = filtered
    .map(
      (student) => `<tr><td>${student.name}</td><td>${student.course}</td></tr>`
    )
    .join('');
}

searchInput.addEventListener('input', (event) => {
  renderTable(event.target.value);
});

renderTable();
