/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
          scroll: 'scroll 20s linear infinite',
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(100%)' },
            /*Pada awal animasi (0%), elemen akan digeser ke 
            kanan sejauh 100% dari posisi awalnya.*/
  
            '100%': { transform: 'translateX(-100%)' },
            /*Pada akhir animasi (100%), elemen akan digeser ke kiri 
            sejauh 100% dari posisi awalnya.*/
          },
        },
      },
    },
    plugins: [require('tailwindcss-motion')], 
  };