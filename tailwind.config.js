/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        midnight: "#37514D",
        knit: "#D8CD80",
        slate: "#718096",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
