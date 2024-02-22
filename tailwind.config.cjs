/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cyberpunk'], // GOOD
    // themes: ['aqua'], // SUCKS
    // themes: ['synthwave'], // OK
    // themes: ['retro'], // GOOD
    // themes: ['valentine'], // GOOD
    // themes: ['halloween'], // GOOD
    // themes: ['forest'], // GOOD
    // themes: ['dracula'], // GOOD
    // themes: ['luxury'], // sucky
    // themes: ['coffee'], // GOOD
    // themes: ['lemonade'], // GOOD
    // themes: ['sunset'], // sucky
    // themes: ['dim'], // sucky
    // themes: ['autumn'], // sucky
  },
};
