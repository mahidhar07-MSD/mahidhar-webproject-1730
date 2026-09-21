// 8. Create a visitor counter using browser storage.
let visits = Number(localStorage.getItem('visits') || 0);
visits += 1;
localStorage.setItem('visits', String(visits));
console.log('Visitor count:', visits);
