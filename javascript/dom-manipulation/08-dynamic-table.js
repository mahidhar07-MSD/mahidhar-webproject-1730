// 8. Create a dynamic table using JavaScript.
const students = [
  { name: 'Alice', course: 'Web Design' },
  { name: 'Bob', course: 'JavaScript' },
  { name: 'Charlie', course: 'Database' }
];

const tbody = document.getElementById('student-table-body');
students.forEach((student) => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${student.name}</td><td>${student.course}</td>`;
  tbody.appendChild(row);
});
