/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#d01c1f",
          "primary-focus": "#880808",
          ".navbar":{
            "background-color":"black"
          }
        },
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "black",
          "primary-focus": "gray",
          ".navbar":{
            "background-color":"#d01c1f"
          }
        },
      },
      // 'light',
      // 'dark'
    ],
  },
}

