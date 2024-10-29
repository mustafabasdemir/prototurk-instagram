/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //login button color
        brand:'#0095f6'
      },
      //ınstagram login phone ımage
      backgroundImage:{
        'logo-pattern':'url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW)'
      }

    },
  },
  plugins: [],
}

