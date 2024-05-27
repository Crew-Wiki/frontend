/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      primary: {
        50: '#DEF2F4',
        100: '#ACDEE1',
        200: '#72C9CE',
        300: '#25B4B9',
        400: '#00A4A8',
        500: '#009495',
        600: '#008787',
        700: '#007776',
        800: '#006766',
        900: '#004B47',
        primary: '#25B4B9',
        container: '#DEF2F4',
        onContainer: '#006766',
      },
      secondary: {
        50: '#f6E3F4',
        100: '#e7B8E4',
        200: '#d788D3',
        300: '#c655C1',
        400: '#b925B4',
        500: '#aB00A8',
        600: '#9D00A3',
        700: '#8A009D',
        800: '#790097',
        900: '#58008b',
        secondary: '#b925B4',
        container: '#f6E3F4',
        onContainer: '#58008B',
      },
      error: {
        50: '#FFECEF',
        100: '#FFCFD4',
        200: '#F09E9E',
        300: '#E67979',
        400: '#F15B57',
        500: '#F64C3E',
        600: '#E8433E',
        700: '#D53A37',
        800: '#C83430',
        900: '#B92A25',
        error: '#D53A37',
        container: '#FFECEF',
      },
      grayscale: {
        50: '#F3F4F6',
        100: '#E3E3E7',
        200: '#D9DADC',
        300: '#C7C8CA',
        400: '#9FA0A2',
        500: '#77787A',
        600: '#4F5052',
        700: '#36383D',
        800: '#27282A',
        900: '#18191A',
        container: '#F3F4F6',
        border: '#E3E3E7',
        lightText: '#9FA0A2',
        text: '#27282A',
      },
    },
    fontFamily: {
      bm: ['BMHANNAPro', 'sans-serif'],
      pretendard: ['pretendard', 'sans-serif'],
    },
    extend: {},
    plugins: [],
  },
};