export function initFooter() {
  const footerContainer = document.getElementById("app-footer");
  if (!footerContainer) return;

  const currentYear = new Date().getFullYear();

  footerContainer.innerHTML = `
    <footer class="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-auto transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <a href="index.html" class="inline-block mb-6 text-decoration-none">
              <span class="text-gray-900 dark:text-gray-50 text-2xl font-black uppercase tracking-tighter transform -skew-x-12 italic">
                Laced
              </span>
            </a>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium footwear for the modern era. Authenticity guaranteed. Worldwide shipping available.
            </p>
          </div>

          <div>
            <h4 class="text-gray-900 dark:text-white font-bold uppercase tracking-wider mb-6">Explore</h4>
            <ul class="space-y-4">
              <li><a href="shop.html" class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Shop All</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="about.html" class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-gray-900 dark:text-white font-bold uppercase tracking-wider mb-6">Connect</h4>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white hover:text-black transition-all">
                <span class="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white hover:text-black transition-all">
                <span class="material-symbols-outlined text-sm">alternate_email</span>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 dark:text-gray-600 text-xs">
            &copy; ${currentYear} Laced Inc. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-gray-500 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-500 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
