/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/components/**/*.{html,js}',
    'src/pages/**/*.{html,js}',
    'src/index.html',
  ],theme: {
    extend: {
      colors: {
        "light-secondary": "#314862",
        "light-accent": "#12263a",  
        "section-light": "#fbfbfb",      
      }
    }

  }
  // ...
}