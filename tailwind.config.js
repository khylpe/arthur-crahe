       /** @type {import('tailwindcss').Config} */

       module.exports = {
              content: [
                  "./src/**/*.{js,jsx,ts,tsx}",
              ],
              theme: {
                  extend: {
                      // Dark theme
                      backgroundColor: {
                          'dark-document': '#2D2D2D',
                          'dark-input': '#2D2D2D',
                          'dark-input-hover': '#1C1C1C',
                          'dark-button': '#FF69B4',
                          'dark-button-hover': '#FF1493',
          
                          'light-document': '#F0F0F0',
                          'light-input': '#F0F0F0',
                          'light-input-hover': '#E5E5E5',
                          'light-button': '#FF69B4',
                          'light-button-hover': '#FF1493',
                      },
                      textColor: {
                          'dark-document': '#FFFFFF',
                          'dark-title': '#FFFFFF',
                          'dark-title-hover': '#FF69B4',
                          'dark-link': '#FF69B4',
                          'dark-link-hover': '#FF1493',
                          'dark-text': '#FFFFFF',
                          'dark-text-hover': '#FF69B4',
          
                          'light-document': '#333333',
                          'light-title': '#333333',
                          'light-title-hover': '#FF69B4',
                          'light-link': '#FF69B4',
                          'light-link-hover': '#FF1493',
                          'light-text': '#333333',
                          'light-text-hover': '#FF69B4',
                      },
                  },
              },
          }          