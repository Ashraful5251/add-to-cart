// Get all the "Buy Now" buttons
const buyNowButtons = document.querySelectorAll(".buy-now-button");

// Add event listeners to the "Buy Now" buttons
buyNowButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const productCard = this.closest(".product-card");
    const productName = productCard.querySelector(".product-name").textContent;
    const productPrice = parseFloat(
      productCard.querySelector(".product-price").textContent.replace("$", "")
    );

    // You can perform any action here when the "Buy Now" button is clicked,
    // such as adding the product to the cart, redirecting to a checkout page, etc.
    console.log(
      `Product "${productName}" with price $${productPrice} added to cart.`
    );
  });
});
