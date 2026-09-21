// 11. Create a simple shopping cart.
const cart = [
  { name: 'Book', price: 200 },
  { name: 'Pen', price: 50 }
];

const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
console.log('Shopping cart total:', totalPrice);
