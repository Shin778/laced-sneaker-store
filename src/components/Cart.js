export function initCartComponent() {
  if (document.getElementById("cart-drawer")) return;

  const cartHTML = `
    <div 
      id="cart-overlay" 
      class="fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300 backdrop-blur-sm"
      onclick="toggleCart()"
    ></div>

    <div 
      id="cart-drawer" 
      class="fixed top-0 right-0 h-full w-full sm:w-100 bg-white dark:bg-gray-900 z-50 transform translate-x-full transition-transform duration-300 border-l border-gray-200 dark:border-gray-800 flex flex-col"
    >
      <div class="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white/95 dark:bg-gray-900/95 backdrop-blur">
        <h2 class="text-2xl font-black text-gray-900 dark:text-white italic uppercase transform -skew-x-12">Your Cart</h2>
        <button 
          onclick="toggleCart()" 
          class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2 cursor-pointer"
        >
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div id="cart-items" class="flex-1 overflow-y-auto p-6 space-y-6">
        </div>

      <div class="p-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        
        <div class="flex justify-between items-center mb-6">
          
          <button 
            id="clear-cart-btn"
            onclick="clearCart()"
            class="hidden text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors cursor-pointer"
          >
            Clear Cart
          </button>

          <div class="text-right ml-auto">
            <span class="text-gray-500 dark:text-gray-400 text-sm mr-2">Total</span>
            <span id="cart-total" class="text-2xl font-bold text-gray-900 dark:text-white">$0</span>
          </div>
        </div>

        <button class="w-full bg-gray-900 text-white dark:bg-white dark:text-black font-black uppercase py-4 rounded hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", cartHTML);
}
