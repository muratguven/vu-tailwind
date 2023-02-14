/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  // important:true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
