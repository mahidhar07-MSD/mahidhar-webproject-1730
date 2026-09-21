// 14. Create a BMI calculator.
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

console.log(calculateBMI(65, 1.7));
