/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/bg-img-01.jpg')",
        about: "url('/assets/images/bg-img-02.jpg')",
        more: "url('/assets/images/bg-img-03.jpg')",
        client: "url('/assets/images/bg-img-04.jpg')",
        galery: "url('/assets/images/bg-img-05.jpg')",
        contact: "url('/assets/images/bg-img-06.jpg')",
      },
      fontSize: {
        'dynamic-h1': 'clamp(1.5rem, 0.3333rem + 3.3333vw, 3rem)',
        'dynamic-h2': 'clamp(1.25rem, 1.25rem + 1.25vw, 2.25rem)',
        'dynamic-h3': 'clamp(1.875rem, 0.6818rem + 5.9659vw, 4.5rem)',
        'dynamic-des': 'clamp(1rem, 0.625rem + 0.625vw, 1.125rem)',
        'dynamic-btn': 'clamp(1.25rem, 1.0417rem + 1.0417vw, 1.875rem)',
      },
      colors: {
        'red-btn': '#C66666',
      },
      animation: {
        grow: 'grow 10s linear infinite',
      },
    },
  },
  plugins: [],
};
