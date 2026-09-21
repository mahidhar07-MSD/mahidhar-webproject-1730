// 15. Create an image slideshow/carousel using JavaScript.
const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1025/600/400',
  'https://picsum.photos/id/1035/600/400'
];

let index = 0;
const slide = document.getElementById('slide');

function showSlide() {
  slide.src = images[index];
}

setInterval(() => {
  index = (index + 1) % images.length;
  showSlide();
}, 2000);
