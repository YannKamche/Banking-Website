/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e", //prominent color: rgba(226, 138, 152, 0.937)
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF"
      }
    },
    container: { 
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    },
    fontFamily: {
      body: ['Poppins']
    }
  },
  plugins: [],
}

