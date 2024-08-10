const products = [
  {
    id: "502c305a-997e-4534-97b8-f6f7862f3737",
    name: "Yellow Chair",
    headline: "Jelly like surface",
    price: "15000",
    image: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "67aadbfe-a6d9-4d8d-a436-27c369cff5ff",
    name: "White Chair",
    headline: "Soft like cloud",
    price: "25000",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "54c3c17e-b3e9-469b-800a-b065d193a6d9",
    name: "Brown Chair",
    headline: "Soft and Comfortable",
    price: "30000",
    image: "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "e2085e01-f142-4475-8124-e24722cff1d6",
    name: "White Long Chair",
    headline: "Soft and Comfortable",
    price: "20000",
    image: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    id: "a3025e01-e142-2275-8124-e95822ckk1f9",
    name: "Pink Chair",
    headline: "Soft and Comfortable",
    price: "23000",
    image: "https://plus.unsplash.com/premium_photo-1690971631360-c7b4f08b4f94?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
];

let str = "";

products.map(
  ({ name, headline, price, image }, i) =>
    (str += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
         <img class="w-full h-full object-cover" src="${image}"/>
        </div>
        <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">
            ${name}
          </h1>
          <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
              <h3 class="font-semibold opacity-20">${headline}</h3>
              <h4 class="font-semibold mt-2">$ ${price}</h4>
            </div>
            <button class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400" onclick="addToCart(${i})">
              <i class="ri-add-line"></i>
            </button>
          </div>
        </div>
      </div>`)
);

document.addEventListener("DOMContentLoaded", () => {
  const productEl = document.querySelector(".products");
  if (productEl) {
    productEl.innerHTML = str;
  } else {
    console.error("Element with class 'products' not found.");
  }
});

let cart = {};

function addToCart(index) {
  const { id } = products[index];

  if (id in cart) {
    cart[id].quantity += 1;
    cart[id].totalPrice = cart[id].quantity * cart[id].price;
  } else {
    cart[id] = { ...products[index] };
    cart[id].quantity = 1;
    cart[id].totalPrice = cart[id].quantity * cart[id].price;
  }

  cart.totalBill = Object.keys(cart)
    .filter(key => key !== "totalBill")
    .reduce((total, id) => total + cart[id].totalPrice, 0);

  // Save cart data to localStorage to access it in cart.html
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log(cart);
}
