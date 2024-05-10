/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        blackops: ["Black Ops One", "system-ui"],
      },
    },
  },
  plugins: [],
};
