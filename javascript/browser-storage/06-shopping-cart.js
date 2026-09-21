// 6. Create a shopping cart using localStorage.
const cart = JSON.parse(localStorage.getItem('cart') || '[]');
cart.push({ item: 'Laptop', price: 50000 });
localStorage.setItem('cart', JSON.stringify(cart));
console.log('Cart:', cart);
