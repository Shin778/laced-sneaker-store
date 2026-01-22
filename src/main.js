import { initNavbar } from "./components/Navbar.js";
import { initCartComponent } from "./components/Cart.js";
import { initFooter } from "./components/Footer.js";
import { products } from "./data/products.js";
import { initTheme, toggleTheme } from "./utils/theme.js";

// Cart logic
let cart = JSON.parse(localStorage.getItem("laced_cart")) || [];

// Saver cart
const saveCart = () => {
  localStorage.setItem("laced_cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
};

// Add to cart
window.addToCart = (id) => {
  const product = products.find((p) => p.id === id);
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
};

// Count updater
window.updateQuantity = (id, change) => {
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }
    saveCart();
  }
};

// Clear cart
window.clearCart = () => {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
};

// Cart toggle
window.toggleCart = (forceOpen = null) => {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");

  if (!drawer || !overlay) return;

  const isClosed = drawer.classList.contains("translate-x-full");
  const shouldOpen = forceOpen !== null ? forceOpen : isClosed;

  if (shouldOpen) {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  }
};

// Toggle mobile menu
window.toggleMobileMenu = () => {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("mobile-menu-btn");
  const icon = btn.querySelector(".material-symbols-outlined");

  menu.classList.toggle("hidden");

  if (menu.classList.contains("hidden")) {
    icon.innerText = "menu";
    btn.classList.remove("bg-gray-100", "dark:bg-gray-900");
  } else {
    icon.innerText = "close";
    btn.classList.add("bg-gray-100", "dark:bg-gray-900");
  }
};

// Render products
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const clearBtn = document.getElementById("clear-cart-btn");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
        <span class="material-symbols-outlined text-6xl mb-4">shopping_bag</span>
        <p>Your cart is empty</p>
      </div>`;

    if (totalEl) totalEl.innerText = "$0";
    if (clearBtn) clearBtn.classList.add("hidden");
    return;
  }

  // Total sum
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (totalEl) totalEl.innerText = `$${total}`;

  // Clear button
  if (clearBtn) clearBtn.classList.remove("hidden");

  // Render list
  container.innerHTML = cart
    .map(
      (item) => `
    <div class="flex gap-4 mb-4">
      <div class="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shrink-0">
        <img src="${item.image}" class="w-full h-full object-cover">
      </div>
      
      <div class="flex-1">
        <h4 class="text-gray-900 dark:text-white font-bold text-sm mb-1">${item.name}</h4>
        <p class="text-gray-500 dark:text-gray-400 text-xs mb-2">$${item.price}</p>
        
        <div class="flex items-center gap-3">
          <button 
            onclick="updateQuantity(${item.id}, -1)" 
            class="w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            -
          </button>
          
          <span class="text-gray-900 dark:text-white text-sm font-mono">${item.quantity}</span>
          
          <button 
            onclick="updateQuantity(${item.id}, 1)" 
            class="w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Update cart bage
function updateCartCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems > 0) {
    badge.innerText = totalItems;
    badge.classList.remove("hidden");

    badge.classList.add("scale-125");
    setTimeout(() => badge.classList.remove("scale-125"), 200);
  } else {
    badge.classList.add("hidden");
  }
}

// Render Trending
function renderTrending() {
  const container = document.getElementById("trending-container");
  if (!container) return;

  const trendingProducts = [...products]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);

  const cardsHTML = trendingProducts
    .map(
      (product) => `
    <div class="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-gray-600 transition-all hover:-translate-y-2 shadow-sm dark:shadow-none">
      
      <div class="aspect-4/3 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        ${
          product.isNew
            ? `<div class="absolute top-4 right-4 bg-black text-white dark:bg-white dark:text-black text-xs font-bold px-2 py-1 rounded uppercase">New</div>`
            : ""
        }
      </div>
      
      <div class="p-6">
        <h3 class="text-gray-900 dark:text-gray-50 text-xl font-bold mb-2">${product.name}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">${product.category}</p>
        
        <div class="flex justify-between items-center">
          <span class="text-gray-900 dark:text-gray-50 text-2xl font-black">$${product.price}</span>
          
          <button 
            onclick="addToCart(${product.id})"
            class="w-10 h-10 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors cursor-pointer active:scale-95 shadow-md"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
          
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  container.innerHTML = cardsHTML;
}

// Filter and catalog logic

let filterState = {
  brand: "All",
  sort: "default",
};

window.updateFilter = (type, value) => {
  if (type === "brand") filterState.brand = value;
  if (type === "sort") filterState.sort = value;
  renderCatalog();
};

function renderCatalog() {
  const container = document.getElementById("catalog-container");
  if (!container) return;

  let filteredProducts = [...products];

  if (filterState.brand !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand === filterState.brand,
    );
  }

  if (filterState.sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filterState.sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20">
        <p class="text-gray-500 dark:text-gray-400 text-xl">No products found for this filter.</p>
        <button onclick="updateFilter('brand', 'All')" class="mt-4 text-purple-600 dark:text-purple-400 hover:underline cursor-pointer">Clear filters</button>
      </div>
    `;
    return;
  }

  const cardsHTML = filteredProducts
    .map(
      (product) => `
    <div class="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-gray-600 transition-all hover:-translate-y-2 shadow-sm dark:shadow-none">
      
      <div class="aspect-4/3 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        ${product.isNew ? `<div class="absolute top-4 right-4 bg-black text-white dark:bg-white dark:text-black text-xs font-bold px-2 py-1 rounded uppercase">New</div>` : ""}
      </div>
      
      <div class="p-6">
        <h3 class="text-gray-900 dark:text-gray-50 text-xl font-bold mb-2">${product.name}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">${product.category}</p>
        <div class="flex justify-between items-center">
          <span class="text-gray-900 dark:text-gray-50 text-2xl font-black">$${product.price}</span>
          
          <button 
            onclick="addToCart(${product.id})"
            class="w-10 h-10 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors cursor-pointer active:scale-95 shadow-md"
          >
            <span class="material-symbols-outlined">add</span>
          </button>
          
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  container.innerHTML = cardsHTML;
}

// Runner
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initTheme();
  initCartComponent();
  initFooter();

  renderTrending();
  renderCatalog();

  renderCart();
  updateCartCount();

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.onclick = toggleTheme;
  }
});
