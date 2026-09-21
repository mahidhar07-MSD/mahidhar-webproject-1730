USE student_management;

START TRANSACTION;

INSERT INTO students (name, email, age, course)
VALUES ('Carol', 'carol@example.com', 21, 'Database');

SAVEPOINT before_update;

UPDATE students SET course = 'Advanced Database' WHERE email = 'carol@example.com';

ROLLBACK TO SAVEPOINT before_update;

COMMIT;

SELECT * FROM students;
