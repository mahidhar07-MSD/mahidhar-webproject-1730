// Create a tabs interface using DOM manipulation.
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    panels.forEach((panel) => {
      panel.style.display = panel.id === target ? 'block' : 'none';
    });
  });
});
