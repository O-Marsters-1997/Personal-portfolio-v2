const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    letterSpacing: {
      narrow: ".02rem",
      narrower: ".04rem",
      normal: ".06rem",
      wider: ".08rem",
      wide: ".1rem",
    },

    extend: {
      // Clamp sizes must be defined in the typography css as not supported yet by tailwind
      fontSize: {
        // h1
        h1Mobile: "2.95rem",
        h1Tablet: "4.75rem",
        h1Desktop: "5.75rem",
        // h2
        h2Mobile: "1.5rem",
        h2Tablet: "2rem",
        h2Desktop: "3rem",
        // h3
        h3Mobile: "1.25rem",
        h3Tablet: "1.5rem",
        h3Desktop: "1.63rem",
        // h5
        h5Mobile: ".91rem",
        h5Table: "1rem",
        h5Desktop: "1.1rem",
        // Body1
        body1Mobile: ".88rem",
        body1Desktop: "1.15rem",
        // Body2
        body2MobileSmall: ".7rem",
        body2Mobile: ".85rem",
        body2Desktop: "clamp(.75rem, 1.35vw ,.9rem)",
        // Subtitle
        subtitleMobile: ".75rem",
        subtitleTablet: "1.13rem",
        subtitleDesktop: "1.25rem",
        // button
        buttonMobile: ".75rem",
        buttonTablet: ".88rem",
        buttonDesktop: "1rem",
        // Action
        actionDesktop: "1.63rem",
        actionTablet: "1.5rem",
        actionMobile: "1.13rem",
        // link
        linkMobile: "1rem",
        linkTablet: "1.14rem",
        linkDesktop: "1.26rem",
      },
      fontFamily: {
        body: ["Lato", ...defaultTheme.fontFamily.sans],
        headingBold: ["Epilogue"],
        headingLight: ["Lato"],
      },
      colors: {
        dark: {
          base: {
            main: "rgba(16, 23, 42, 1)",
            extra: " rgba(14, 20, 36, 1)",
            canvas: " rgba(16, 23, 42, 1)",
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
          stars: {
            one: "rgba(240, 167, 81, 1)",
            two: "rgba(89, 195, 195, 1)",
            three: "rgba(218, 218, 218, 1)",
            four: "rgba(255, 255, 255, 1)",
          },

          button: {
            gradientLight: "rgba(236, 150, 51, 1)",
            gradientMedium: "rgba(184, 127, 42,1)",
            gradientDark: "rgba(154, 106, 34, 1)",
          },
          overlay: {
            primary: "rgba(0,0,0, .25)",
            primaryMuted: "rgba(0,0,0, .125)",
          },
        },
        // TODO: make sure all the colours are there in each variant
        light: {
          base: {
            main: "rgba(237, 237, 237, calc(1 / var(--opacity-bg)))",
            extra: " rgba(242, 242, 242, 1)",
            canvas: " rgba(239, 239, 239, 1)",
          },
          primary: {
            main: "rgba(218,218,218, 1)",
            transparent: "rgba(218,218,218, .85)",
          },
          secondary: {
            main: "#794151ff",
            dark: "rgba(58, 48, 118, 1)",
          },
          tertiary: "rgba(190, 116, 137, 1)",
          stars: {
            one: "rgba(42, 141, 88, 1)",
            two: "rgba(167, 17, 87, 1)",
            three: "rgba(41, 43, 39, 1)",
            four: "rgba(12, 112, 151, 1)",
          },

          button: {
            gradientLight: "rgba(112, 100, 185, 1)",
            gradientMedium: "rgba(74, 63, 141,1)",
            gradientDark: "rgba(44, 38, 84, 1)",
          },
          overlay: {
            primary: "rgba(242,242,242, .15)",
            primaryMuted: "rgba(242,242,242, .125)",
          },
        },

        grey: {
          main: "rgba(198, 198, 198, 1)",
          lighter: "rgba(198, 198, 198, 0.773)",
          lightest: "rgba(231, 231, 231, 1)",
          dark: "rgba(72, 72, 72, 1)",
          darker: "#212121ff",
          darkest: "rgba(13, 13, 13, 1)",
        },
      },
      spacing: {
        96: "28rem",
      },

      screens: {
        xxs: "320px",
        xs: "480px",
        "2xl": "1520px",
      },
      width: {
        project: "clamp(15rem, 40vw, 40rem);",
      },
    },
  },
  variants: {
    extend: {
      color: ["light"],
      backgroundColor: ["light"],
    },
  },
  plugins: ["postcss-nesting"],
};
