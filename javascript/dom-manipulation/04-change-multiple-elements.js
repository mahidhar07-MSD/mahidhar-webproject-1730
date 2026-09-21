// 4. Change multiple HTML elements simultaneously.
const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  cards[i].style.backgroundColor = '#e0f2fe';
  cards[i].style.padding = '15px';
  cards[i].style.border = '1px solid #38bdf8';
}
