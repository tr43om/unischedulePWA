/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dracula"]'],
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cupcake", "dracula", "light", "bumblebee", "pastel", "lofi"],
    darkTheme: "dracula",
  },
};
