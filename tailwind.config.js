module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#00A1F2',
          200: '#3181C1',
        },
        secondary: '#0D6EFD',
      },
      fontFamily: {
        sans: ['Poppins', 'Sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
