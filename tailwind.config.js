/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '13rem',

      },
      width: {
        '128': '13rem',
      },
    },
  },
  plugins: [],
}
