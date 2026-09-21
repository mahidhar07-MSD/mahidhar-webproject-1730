USE student_management;

INSERT INTO students (name, email, age, course)
VALUES ('Alice', 'alice@example.com', 20, 'Web Design'),
       ('Bob', 'bob@example.com', 22, 'JavaScript');

INSERT INTO courses (name, duration_months)
VALUES ('Web Design', 6),
       ('JavaScript', 4);

SELECT * FROM students;
SELECT name, email FROM students WHERE age >= 20 ORDER BY name ASC;
SELECT COUNT(*) AS total_students FROM students;
SELECT AVG(age) AS average_age FROM students;
SELECT DISTINCT course FROM students;

UPDATE students SET course = 'Advanced JavaScript' WHERE id = 2;
DELETE FROM students WHERE id = 1;
