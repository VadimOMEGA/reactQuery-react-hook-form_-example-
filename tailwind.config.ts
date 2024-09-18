import { COLORS } from "./src/constants/color.constants";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      spacing: {
        0.5: '0.12rem',
        layout: '1.4rem',
        'big-layout': '2.3rem'
      },
      fontSize: {
        xs: '0.9rem',
        sm: '1.07rem',
        base: '1.18rem',
        lg: '1.24rem',
        xl: '1.38rem',
        '1.5xl' : '1.5rem',
        '2xl' : '1.82rem',
        '3xl' : '2.22rem',
        '4xl' : '2.66rem',
        '5xl' : '3.56rem',
        '6xl' : '4.44rem',
        '7xl' : '5.33rem',
        '8xl' : '7.1rem',
        '9xl' : '9.5rem'
      },
      transitionDuration: {
        DEFAULT: '266ms'
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif']
      },
      boxShadow: {
        '3xl' : '14px 17px 40px 4px',
        inset: 'inset 0px 18px 22px',
        darkinset: '0px 4px 4px inset'
      },
      backgroundImage: {
        ballanceDashboard: "url('/src//public/img/dashboards/balanceImg.png')",
        ellipsisModeCarInterface: "url('https://i.ibb.co/Y3nrFfd/elipse-light.png')",
        ellipsisModeCarInterfaceDark: "url('https://i.ibb.co/g66yJnm/Ellipse-94.png')",
        homeButton: 'linear-gradient(112.83deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0) 110.84%)',
        smartHomeDropzone: `url("data:image/svg+xml, %3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%23E0E5F2FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='5' stroke-linecap='square'/%3e%3c/svg%3e")`
      }
    },
    screens: {
      sm : '576px',
      md : '768px',
      lg: '992px',
      xl: '1288px',
      '2xl' : '1320px',
      '3xl' : '1600px',
      '4xl' : '1850px'
    },
    shadow: {
      100: 'var(--shadow-100)',
      500: 'rgba(112, 144, 176, 0.08)'
    }
  },
  plugins: [],
};
export default config;
