/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#c084fc',
          DEFAULT: '#9333ea',
          dark: '#6b21a8',
        },
        black: '#000000',
        white: '#ffffff',
      },
      scale: {
        '102': '1.02',  // Add this custom scale
      },
    },
  },
  darkMode: "media",
};
