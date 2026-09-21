// 9. Create a program to add and delete rows from a table.
const tableBody = document.getElementById('table-body');

function addRow() {
  const row = document.createElement('tr');
  row.innerHTML = '<td>New Student</td><td>New Course</td>';
  tableBody.appendChild(row);
}

function deleteRow() {
  const rows = tableBody.querySelectorAll('tr');
  if (rows.length > 0) {
    rows[rows.length - 1].remove();
  }
}
