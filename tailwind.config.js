/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1220px',
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}