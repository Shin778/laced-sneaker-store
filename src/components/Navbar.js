export function initNavbar() {
  const navbarContainer = document.getElementById("app-navbar");
  if (!navbarContainer) return;

  navbarContainer.innerHTML = `
    <nav class="fixed top-0 w-full z-50 border-b border-gray-200 dark:border-gray-50/10 bg-white/85 dark:bg-gray-950/85 backdrop-blur-sm transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <a href="index.html" class="shrink-0 cursor-pointer text-decoration-none">
            <span class="text-gray-900 dark:text-gray-50 text-3xl font-black uppercase tracking-tighter transform -skew-x-12 italic inline-block hover:text-purple-600 dark:hover:text-gray-400 transition-colors">
              Laced
            </span>
          </a>

          <div class="hidden md:flex ml-10 items-center space-x-8">
            <a href="index.html" class="nav-link px-3 py-2 font-medium text-gray-700 dark:text-gray-50 hover:text-black dark:hover:text-gray-400 transition-colors">Home</a>
            <a href="shop.html" class="nav-link px-3 py-2 font-medium text-gray-700 dark:text-gray-50 hover:text-black dark:hover:text-gray-400 transition-colors">Shop</a>
            <a href="about.html" class="nav-link px-3 py-2 font-medium text-gray-700 dark:text-gray-50 hover:text-black dark:hover:text-gray-400 transition-colors">About</a>
            <a href="contact.html" class="nav-link px-3 py-2 font-medium text-gray-700 dark:text-gray-50 hover:text-black dark:hover:text-gray-400 transition-colors">Contact</a>
          </div>

          <div class="flex items-center gap-6">
            
            <button id="theme-toggle" class="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-amber-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors cursor-pointer">
              <span class="material-symbols-outlined block">light_mode</span>
            </button>

            <button
              id="cart-btn"
              onclick="toggleCart()"
              class="relative w-10 h-10 flex items-center justify-center text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors cursor-pointer"
              aria-label="Open cart"
            >
              <span class="material-symbols-outlined block">shopping_bag</span>
              <span id="cart-count" class="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full hidden border-2 border-white dark:border-gray-950 pointer-events-none">0</span>
            </button>

            <button 
              id="mobile-menu-btn"
              onclick="toggleMobileMenu()"
              class="md:hidden w-10 h-10 flex items-center justify-center text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors cursor-pointer"
            >
              <span class="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="hidden md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-all">
        <div class="px-4 pt-2 pb-6 space-y-1 flex flex-col items-center">
          <a href="index.html" class="block w-full text-center px-3 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors">Home</a>
          <a href="shop.html" class="block w-full text-center px-3 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors">Shop</a>
          <a href="about.html" class="block w-full text-center px-3 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors">About</a>
          <a href="contact.html" class="block w-full text-center px-3 py-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  `;
}
