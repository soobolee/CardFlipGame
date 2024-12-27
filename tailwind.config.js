/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flipHorizontalCorrect: {
          '100%': { transform: 'rotateY(180deg)' },
        },
        flipHorizontalWrong: {
          '50%': { transform: 'rotateY(180deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        }
      },
      animation: {
        hflipCorrect: "flipHorizontalCorrect 2s forwards",
        hflipWrong: "flipHorizontalWrong 4s forwards",
      },
    },
  },
  plugins: [Myclass],
}

