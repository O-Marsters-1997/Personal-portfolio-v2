const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    letterSpacing: {
      normal: ".06rem",
      mobileLink: ".1rem",
    },

    extend: {
      fontFamily: {
        body: ["Lato", ...defaultTheme.fontFamily.sans],
        headingBold: ["Epilogue"],
        headingLight: ["Lato"],
      },
      colors: {
        base: {
          main: "rgba(16, 23, 42, 1)",
          dark: " rgba(14, 20, 36, 1)",
        },
        primary: {
          main: "rgba(60, 68, 92, 1)",
          transparent: "rgba(60, 68, 92, .85)",
          dark: "rgba(29, 34, 47, 1)",
        },
        secondary: {
          main: "rgba(236, 150, 51, 1)",
          dark: "rgba(183, 140, 90, 1)",
        },
        tertiary: "rgba(234, 99, 139, 1)",

        grey: {
          main: "rgba(198, 198, 198, 1)",
          lighter: "rgba(198, 198, 198, 0.773)",
          lightest: "rgba(198, 198, 198, 1)",
          dark: "rgba(72, 72, 72, 1)",
        },
      },
    },
  },
  plugins: ["postcss-nesting"],
};
