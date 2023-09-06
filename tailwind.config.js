/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e74c3c",
        secondary: "#EC7063"
      }
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1300px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
}
