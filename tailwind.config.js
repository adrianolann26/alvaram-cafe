/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink:   '#2a1e16',
        cream: '#f2e9d8',
        sand:  '#e3d4b3',
        clay:  '#a83c1f',
        clay2: '#7c2c14',
        olive: '#55684a',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans:  ['"IBM Plex Sans"', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
