/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0346B5",
        secondary: "#B5097B",
      },
      height: {
        "custom-hero": "100dvh",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: false,
  },
};
