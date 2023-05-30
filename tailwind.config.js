/** @type {import('tailwindcss').Config} */

module.exports = {
       plugins: [
              require('flowbite/plugin')
       ],

       content: [
              "./src/**/*.{js,jsx,ts,tsx}",
              'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
       ],
       theme: {
              extend: {},
              container: {
                     center: true,
                     padding: '25rem',
                     screens: {
                            sm: '640px',
                            md: '768px',
                            lg: '1024px',
                            xl: '1280px',
                     },
              },
       },
}          