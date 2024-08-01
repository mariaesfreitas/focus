import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        '400': '400',
        '700': '700',
      },
      backgroundImage: {
        background: "url('/images/background-image.png')",
        backgroundRange: "url('/images/background-range.png')",
      },
      colors: {
        customGold: '#B89B5E',
      },
    },
  },
  plugins: [],
};
export default config;
