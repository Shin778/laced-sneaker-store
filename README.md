# 👟 Laced Sneaker Store

Laced is a modern, responsive e-commerce storefront for a sneaker store. Built with vanilla JavaScript, Vite, and Tailwind CSS, it offers a clean user interface, a dynamic product catalog, and a persistent shopping cart. The project demonstrates a component-based architecture using plain HTML and JavaScript modules.

## ✨ Key Features

- 🌗 **Light & Dark Mode:** Seamless theme toggling with user preference detection and `localStorage` persistence.
- 🛒 **Persistent Shopping Cart:** Add, remove, and update items in a cart that persists across browser sessions.
- 🛍️ **Dynamic Product Catalog:** A dedicated shop page featuring products that can be effortlessly filtered by brand and sorted by price.
- 🔥 **Trending Products Section:** The homepage automatically spotlights the most popular kicks.
- 🧩 **Component-Based Architecture:** Highly modular and maintainable code with reusable UI components (Navbar, Footer, Cart).
- 📱 **Fully Responsive:** Flawless modern UI/UX with smooth animations across all devices (Mobile, Tablet, Desktop).

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES Modules)
- **CSS Framework:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Material Symbols

## 🚀 Live Demo

Check out the live deployment of the application here:  
👉 **[laced-sneaker-store.vercel.app](https://laced-sneaker-store.vercel.app)**

## 💻 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shin778/laced-sneaker-store.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd laced-sneaker-store
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at the local address provided by Vite (e.g., `http://localhost:5173`).

### 📦 Build for Production

To create a production-ready build of the static site:

```bash
npm run build
```
The optimized files will be generated in the `dist/` directory.

## 📁 Project Structure

The repository is organized as follows:

```
.
├── index.html         # Main landing page
├── shop.html          # Product catalog page
├── about.html         # About Us page
├── contact.html       # Contact page
├── package.json       # Project dependencies and scripts
├── vite.config.ts     # Vite build configuration
└── src/
    ├── main.js        # Main application entry point and logic
    ├── style.css      # Tailwind CSS setup and custom styles
    ├── components/    # Reusable UI components (Navbar, Cart, Footer)
    ├── data/          # Static product data
    └── utils/         # Utility functions (e.g., theme handling)
