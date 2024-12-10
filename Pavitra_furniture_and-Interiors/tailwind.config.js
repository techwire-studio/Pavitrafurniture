/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'bg-primary': "#927343",
      'bg-secondary': "#F8B650",
      "text-primary": "#FFF",
      'customGray': '#777777',
      'bg-contact' : "#EBE4D6",
      'form-color': "#A3A3A3",
      'form-bg': "#FCFCFC",
      'sub-color': "#222222",
      'sub-border': "#C6C6C6",
      'dw-bg': "#1A1915",
      'customLine': "C6C6C6",
      'foot1': "#636363",
      'foot2': "#1A1915",
      'foot3': "#7A7A7A",
      'text-company': "#484848",

    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Fira Sans', 'sans-serif'], // Add both fonts here
      },
    },
  },
  plugins: [],
}

