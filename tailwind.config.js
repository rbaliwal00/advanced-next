module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens:{
      'mobile':{'max': '400px'}
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
