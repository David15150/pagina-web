// /src/js/cart.js
const cartItems = [];
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const toggleCartButton = document.getElementById('toggle-cart');
const cartElement = document.getElementById('cart');

function addToCart(name, price) {
  // Verificar si el producto ya está en el carrito
  const existingItem = cartItems.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const item = { name, price, quantity: 1 };
    cartItems.push(item);
  }
  updateCart();
}

function updateCart() {
  cartItemsElement.innerHTML = '';
  let totalPrice = 0;
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsElement.appendChild(li);
    totalPrice += item.price * item.quantity;
  });
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Función para mostrar/ocultar el carrito
toggleCartButton.addEventListener('click', () => {
  if (cartElement.style.display === 'none' || cartElement.style.display === '') {
    cartElement.style.display = 'block';
    toggleCartButton.textContent = 'Ocultar Carrito';
  } else {
    cartElement.style.display = 'none';
    toggleCartButton.textContent = 'Mostrar Carrito';
  }
});

// Hacer el fondo del carrito transparente
cartElement.style.backgroundColor = 'rgba(26, 26, 29, 0.8)'; // Fondo negro con 80% de opacidad


