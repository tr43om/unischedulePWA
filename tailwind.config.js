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
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
  daisyui: {
    themes: [
      "pastel",
      "cmyk",
      "dracula",
      {
        light: {
          primary: "#0284c7",

          secondary: "#BD93F9",

          accent: "#FFB86C",

          neutral: "#414558",

          "base-100": "#e0e7ff",

          info: "#8BE9FD",

          success: "#50FA7B",

          warning: "#F1FA8C",

          error: "#FF5555",
        },
      },
    ],
    darkTheme: "dracula",
  },
};
