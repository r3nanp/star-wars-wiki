module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffe81f"
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
}
