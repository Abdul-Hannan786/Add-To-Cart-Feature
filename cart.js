document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalBillElement = document.querySelector(".total-bill");

    // Fetch cart items from the storage (this will be set by the main app)
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Populate the cart items
    let cartHTML = "";
    for (const id in cart) {
        if (id !== "totalBill") {
            const {image, quantity, name, totalPrice} = cart[id];
            cartHTML += `
            <div class="cart-item flex items-center gap-5">
                <img src="${image}" class="w-20 h-20 rounded-md object-cover"/>
                <div>
                    <h3 class="font-semibold">${name}</h3>
                    <p>Quantity: ${quantity}</p>
                    <p>Total Price: $${totalPrice}</p>
                </div>
            </div>
            `;
        }
    }

    cartItemsContainer.innerHTML = cartHTML || `<p class="text-center">No items in the cart.</p>`;
    totalBillElement.textContent = `$${cart.totalBill || 0}`;

    // Close cart functionality
    document.querySelector(".cancel-cart").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Clear cart functionality
    document.querySelector(".clear-cart").addEventListener("click", () => {
        localStorage.removeItem("cart");
        window.location.reload();
    });
});
