// 10. Create a student marks/grade calculator.
function calculateMarks(maths, science, english) {
  const total = maths + science + english;
  const average = total / 3;

  if (average >= 90) return 'A';
  if (average >= 75) return 'B';
  if (average >= 60) return 'C';
  if (average >= 50) return 'D';
  return 'F';
}

console.log(calculateMarks(80, 90, 85));
