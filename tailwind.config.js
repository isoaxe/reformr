/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '300ms',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '430px', // extra-small
      },
      dropShadow: {
        black: 'rgba(0, 0, 0, 1) 0px 0px 15px',
        white: 'rgba(255, 255, 255, 1) 0px 0px 12px',
      },
    },
  },
  plugins: [],
};
