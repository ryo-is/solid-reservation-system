/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '1/7': '14.285%',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2563eb',
          secondary: '#4ade80',
          accent: '#1FB2A6',
          neutral: '#191D24',
          info: '#e5e7eb',
          success: '#16a34a',
          warning: '#f59e0b',
          error: '#dc2626',
          'base-100': '#e4e4e7',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
