/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      green: "#41E4A4",
      blue:"#198a9ccc",
      lightblue:"#A5D3D8",
      white: "#ffffff",
      black: {
        900: "#333333",
        DEFAULT: "#000000",
      },
    },
    fontFamily: {
      sans: ["Encode Sans Expanded", "sans-serif"],
    },
    fontSize: {
      base: ["14px", { lineHeight: "18px" }],
      md: ["18px", { lineHeight: "24px" }],
      lg: ["30px", { lineHeight: "24px" }],
      xl: ["50px", { lineHeight: "63px" }],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};
