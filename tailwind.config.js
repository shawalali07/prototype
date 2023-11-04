import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.zinc[500],
          border: "#27272A",
          danger: "#9F423C",
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900],
        },
        primary: {
          DEFAULT: "#18181B",
        },
        fontFamily: {
          inter: ["Inter", "sans"],
        },
      },
    },
  },
  plugins: [],
};
