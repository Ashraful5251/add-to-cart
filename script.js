document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartCountElement = document.querySelector(".cart-count");
  const cartTotalElement = document.querySelector(".cart-total");
  const cartItems = [];

  let cartCount = 0;
  let cartTotal = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  function addToCart(event) {
    const productPrice = parseFloat(event.target.getAttribute("data-price"));
    const productName = event.target.getAttribute("data-name");

    cartItems.push({ name: productName, price: productPrice });

    cartCount++;
    cartTotal += productPrice;

    updateCartCount();
    updateCartTotal();
  }

  function updateCartCount() {
    cartCountElement.textContent = cartCount;
  }

  function updateCartTotal() {
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
  }

  const checkoutButton = document.querySelector(".checkout-button");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", redirectToCart);
  }

  function redirectToCart() {
    // You can change "cart.html" to the actual URL of your cart page
    window.location.href = "cart.html";
  }
});
