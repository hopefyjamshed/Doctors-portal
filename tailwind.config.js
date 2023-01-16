/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#0FCFEC",

          "secondary": "#19D3AE",

          accent: "#3A4256",

          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },

    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),
  require('flowbite/plugin')
  ],
}
