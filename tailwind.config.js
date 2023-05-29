/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#0065B3",
        secondary: "#E61030",
        third: "#FFE083",
      },
      fontFamily: {
        Asiana: ["Socake", "sans-serif"],
        Karasu: ["Socake", "sans-serif"],
      },
    },
  },
  plugins: [],
};
