// 7. Create a theme switcher using localStorage.
const theme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark', theme === 'dark');

const toggleTheme = () => {
  const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', newTheme);
};

window.addEventListener('click', toggleTheme);
