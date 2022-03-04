module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { min: "980px" },
      sm: { min: "1200px" },
      // => @media (min-height: 800px) { ... }
    },
    fontSize: {
      caption: [
        "var(--text-caption)",
        {
          letterSpacing: "1",
          lineHeight: "100%",
        },
      ],
      base: [
        "var(--text-base)",
        {
          letterSpacing: "1",
          lineHeight: "140%",
        },
      ],
      lg: [
        "var(--text-lg)",
        {
          letterSpacing: "1.1",
          lineHeight: "150%",
        },
      ],
    },
    extend: {
      colors: {
        clamp: {
          "dark-blue-400": "var(--color-dark-blue-400)",
          "dark-blue-300": "var(--color-dark-blue-300)",
          "dark-blue-250": "var(--color-dark-blue-250)",
          "dark-blue-200": "var(--color-dark-blue-200)",
          "blue-white-50": "var(--color-blue-white-50)",
          "primary-gradient": "var(--color-primary-gradient)",
          gray: "var(--color-gray)",
          active: "var(--color-active)",
          error: "var(--color-error)",
          success: "var(--color-success)",
        },
      },
      spacing: {
        "base-padding-inline": "var(--base-padding-inline)",
        "base-gap-inline": "var(--base-element-gap-inline)",
        "base-gap-top": "var(--base-element-gap-top)",
        "base-gap-bottom": "var(--base-element-gap-bottom)",
        "base-grid-gap-x": "var(--base-grid-gap-x)",
        "base-grid-gap-y": "var(--base-grid-gap-y)",
      },
    },
  },
  plugins: [],
};
