/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EDE1',
        ivory: '#FBF7F0',
        bronze: '#A67C52',
        'bronze-deep': '#8A6440',
        cocoa: '#4A3B2C',
        taupe: '#8C7A66',
        'ecu-purple': '#592A8A',
        line: '#E3D6C3',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        script: ['Pinyon Script', 'cursive'],
        body: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        palm: '0 20px 70px rgba(74, 59, 44, 0.12)',
      },
    },
  },
  plugins: [],
};
