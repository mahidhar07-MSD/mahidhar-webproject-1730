const image = document.getElementById('productImage');
const btn = document.getElementById('changeImage');
btn?.addEventListener('click', () => {
  image.src = 'https://via.placeholder.com/250';
});
