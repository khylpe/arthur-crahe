/** @type {import('tailwindcss').Config} */

module.exports = {
       purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
       plugins: [
              require('flowbite/plugin'),
       ],

       content: [
              "./src/**/*.{js,jsx,ts,tsx}",
              'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
       ],
       theme: {
              extend: {
                     container: {
                            center: true,
                            padding: '1rem',
                            screens: {
                                   sm: '100%',
                                   md: '100%',
                                   lg: '800px',
                                   xl: '800px',
                                   '2xl': '800px',
                            },
                     },
              },
       },
}          