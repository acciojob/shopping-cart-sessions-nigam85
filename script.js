// // This is the boilerplate code given for you
// // You can modify this code
// // Product data
// const products = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
//   { id: 4, name: "Product 4", price: 40 },
//   { id: 5, name: "Product 5", price: 50 },
// ];

// // DOM elements
// const productList = document.getElementById("product-list");

// // Render product list
// function renderProducts() {
//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
//     productList.appendChild(li);
//   });
// }

// // Render cart list
// function renderCart() {}

// // Add item to cart
// function addToCart(productId) {}

// // Remove item from cart
// function removeFromCart(productId) {}

// // Clear cart
// function clearCart() {}

// // Initial render
// renderProducts();
// renderCart();

document.addEventListener('DOMContentLoaded', function () {
  const cartItemsList = document.getElementById('cart-items');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Retrieve cart data from session storage or initialize an empty cart
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Function to update the cart items in the UI
  function updateCartUI() {
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartItemsList.appendChild(li);
    });
  }

  // Add click event listener to each "Add to Cart" button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const product = button.getAttribute('data-product');
      cart.push(product);
      sessionStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
    });
  });

  // Initialize cart UI on page load
  updateCartUI();
});

