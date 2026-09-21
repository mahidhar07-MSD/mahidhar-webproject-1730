USE student_management;

INSERT INTO enrollments (student_id, course_id)
VALUES (2, 2), (3, 1);

SELECT s.name, c.name AS course_name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id;

SELECT s.name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
WHERE e.id IS NULL;

SELECT name
FROM students
WHERE id IN (SELECT student_id FROM enrollments);

CREATE VIEW student_course_view AS
SELECT s.name, c.name AS course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;

SELECT * FROM student_course_view;
