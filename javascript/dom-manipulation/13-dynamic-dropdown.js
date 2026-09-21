// 13. Create a dynamic dropdown list.
const category = document.getElementById('category');
const list = ['HTML', 'CSS', 'JavaScript', 'React'];

list.forEach((item) => {
  const option = document.createElement('option');
  option.value = item;
  option.textContent = item;
  category.appendChild(option);
});
