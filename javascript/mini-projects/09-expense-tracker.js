// 9. Create a simple expense tracker.
const expenses = [
  { item: 'Lunch', amount: 120 },
  { item: 'Travel', amount: 250 }
];

const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
console.log('Total expenses:', total);
