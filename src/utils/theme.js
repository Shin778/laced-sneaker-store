export function initTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  updateThemeIcon();
}

export function toggleTheme() {
  const html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
  }

  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const isDark = document.documentElement.classList.contains("dark");
  const icon = btn.querySelector(".material-symbols-outlined");

  if (icon) {
    icon.textContent = isDark ? "light_mode" : "dark_mode";
    btn.className = isDark
      ? "w-10 h-10 flex items-center justify-center text-amber-300 hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
      : "w-10 h-10 flex items-center justify-center text-purple-600 hover:bg-gray-200 rounded-full transition-colors cursor-pointer";
  }
}
