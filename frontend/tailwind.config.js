/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "circle-keys": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "dot-keys": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        "outline-keys": {
          "0%": {
            transform: "scale(0)",
            outline: "solid 20px var(--color)",
            "outline-offset": "0",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            outline: "solid 0 transparent",
            "outline-offset": "20px",
            opacity: "0",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "circle-keys": "circle-keys 2s ease-in-out infinite",
        "dot-keys": "dot-keys 2s ease-in-out infinite",
        "outline-keys": "outline-keys 2s ease-in-out infinite",
        spin: "spin 1s linear infinite",
      },
      colors: {
        customColor: "hsl(0, 0%, 87%)",
      },
    },
  },
  plugins: [],
};
