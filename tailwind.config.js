/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          200: "#545457",
          100: "#c7572b"
        }, 
        white: {
          800: "#333",
          600 :"#f5f5f5",
          500: "#9999",
          400: "#e6e5e5",
          200 :'#fff',
        },
        text: {
        },
        footer: "#c7572b",
        hoverColor: "#e95658"
      },
    },
  },
  plugins: [],
}
