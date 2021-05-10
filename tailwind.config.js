module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  purge:
    process.env.NODE_ENV === "production"
      ? {
          enabled: true,
          content: [
            "src/**/*.html",
            "src/**/*.njk",
            "src/**/*.js",
            "src/**/*.md",
          ],
        }
      : {},
};
