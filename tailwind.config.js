/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cyber-slate": "#adadad",
        "primary": "#c8c8c8",
        "white": "#ffffff",
        "neon-cyan": "#00f0ff",
        "neon-green": "#39ff14",
        "neon-pink": "#ff0055",
        "neon-purple": "#ecb2ff",
        "neon-orange": "#ff9100",
        "surface": "#131313",
        "background": "#0d0d0d"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}
