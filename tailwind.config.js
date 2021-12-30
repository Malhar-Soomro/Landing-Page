module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        StartFreeTrial: "#14203E",
        Login: "#F6F0E8",
        modernway: "#14203E",
        empowerdesigners: "#14203E"
      },
      fontFamily: {
        myFont: ["Nunito"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
