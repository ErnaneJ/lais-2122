/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        eb_gray:{
          '100': '#ECECEC',
          '200': '#F5F5F7',
          '400': '#D3D3D3',
          '500': '#2F2E41',
        },
        'eb_pink': '#D16FFF',
        'eb_green': '#7DC143',
      },
      shadow: {
        'eb_shadow_header': 'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);',
      }
    },
  },
  plugins: [],
}
