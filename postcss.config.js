// postcss.config.js (ESM)
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').PostcssOptions} */
export default {
  plugins: [
    tailwindcss(),
    autoprefixer,
  ],
};
