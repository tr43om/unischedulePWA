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
      {
        cmyk: {
          ...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
          primary: "#bb9494",
          neutral: "#4a4a4a",
        },
        dracula: {
          ...require("daisyui/src/colors/themes")["[data-theme=dracula]"],
          primary: "#bb9494",
        },
      },
    ],
    darkTheme: "dracula",
  },
};
