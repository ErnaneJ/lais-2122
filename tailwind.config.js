/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'eb_gray': '#2F2E41',
        'eb_pink': '#D16FFF',
        'eb_green': '#7DC143;',
      },
      shadow: {
        'eb_shadow_header': 'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);',
      }
    },
  },
  plugins: [],
}
