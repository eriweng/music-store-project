/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      borderWidth: {
        normal: "0.6px",
      },

    },
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
