// 5. Create a program using event bubbling and event capturing.
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

outer.addEventListener('click', () => console.log('Bubbling: outer'));
inner.addEventListener('click', () => console.log('Capturing: inner'), true);
