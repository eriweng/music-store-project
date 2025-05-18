/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx,html}",

  ],
  theme: {
    extend: {},
    container: {
    center: true,
    }
  },
  plugins: [
     require('flowbite/plugin')
  ],
}

