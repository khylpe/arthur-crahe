/** @type {import('tailwindcss').Config} */
module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
       theme: {
              extend: {
                     container: {
                            center: true,
                            padding: '1rem',
                            screens: {
                                   sm: '98%',
                                   md: '800px',
                                   lg: '1200px',
                                   xl: '1400',
                                   '2xl': '1600px',
                            },
                     },
              },
       },
       plugins: [require('flowbite/plugin')],
}
