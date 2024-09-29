/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGray: "#4D4D4D",
        brandPrimary: "#0369a1",
        neutralGrey: "#999999",
        textGray: "#111827",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
