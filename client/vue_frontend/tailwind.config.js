/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        placeholder: "url('./src/assets/placeholder.jpg')",
      },
    },
  },
  plugins: [],
};
