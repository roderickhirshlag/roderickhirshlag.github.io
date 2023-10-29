document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let total = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const dish = this.parentNode;
            const name = dish.querySelector("h2").textContent;
            const price = dish.querySelector(".price").textContent;
            total += parseFloat(price.replace("$", ""));
            const cartItem = document.createElement("li");
            cartItem.textContent = `${name} - ${price}`;
            cartItems.appendChild(cartItem);
            cartTotal.textContent = `$${total.toFixed(2)}`;
        });
    });
});