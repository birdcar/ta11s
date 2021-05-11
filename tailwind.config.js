module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
  purge:
    process.env.NODE_ENV === "production"
      ? {
          enabled: true,
          content: ["src/**/*.njk", "src/**/*.js", "src/**/*.md"],
        }
      : {},
};
