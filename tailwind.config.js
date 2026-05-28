/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cyber-slate": "#adadad",
        "primary": "#c8c8c8",
        "white": "rgb(var(--white-rgb) / <alpha-value>)",
        "neon-cyan": "rgb(var(--neon-cyan-rgb) / <alpha-value>)",
        "neon-green": "rgb(var(--neon-green-rgb) / <alpha-value>)",
        "neon-pink": "rgb(var(--neon-pink-rgb) / <alpha-value>)",
        "neon-purple": "rgb(var(--neon-purple-rgb) / <alpha-value>)",
        "neon-orange": "rgb(var(--neon-orange-rgb) / <alpha-value>)",
        "surface": "rgb(var(--surface-rgb) / <alpha-value>)",
        "background": "rgb(var(--bg-rgb) / <alpha-value>)",
        "border-hi": "rgb(var(--border-hi-rgb) / <alpha-value>)",
        "hover-light": "var(--hover-light)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}
