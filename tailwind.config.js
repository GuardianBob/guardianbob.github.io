/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cyber-slate": "#adadad",
        "primary": "#c8c8c8",
        "white": "var(--white)",
        "neon-cyan": "var(--neon-cyan)",
        "neon-green": "var(--neon-green)",
        "neon-pink": "var(--neon-pink)",
        "neon-purple": "var(--neon-purple)",
        "neon-orange": "var(--neon-orange)",
        "surface": "var(--surface)",
        "background": "var(--bg)",
        "hover-light": "var(--hover-light)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}
