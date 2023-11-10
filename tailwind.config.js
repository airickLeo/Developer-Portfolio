import { mainBg } from './src/assets'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080808",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        nav: "#050816",
        charcol: "#36454f"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "800px",
        lg: "1260px",
        xl: "1560px",
        heroContact: "900px"
      },
      backgroundImage: {
        "herobg": mainBg,
      },
    },
  },
  plugins: [],
}

