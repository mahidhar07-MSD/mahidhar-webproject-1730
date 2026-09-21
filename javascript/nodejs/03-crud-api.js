const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/students', (req, res) => res.json(students));

app.post('/students', (req, res) => {
  const student = { id: Date.now(), name: req.body.name };
  students.push(student);
  res.status(201).json(student);
});

app.put('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) return res.status(404).json({ message: 'Student not found' });

  student.name = req.body.name;
  res.json(student);
});

app.delete('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  students = students.filter((s) => s.id !== id);
  res.json({ message: 'Student deleted' });
});

app.listen(3000, () => console.log('CRUD API running on http://localhost:3000'));
