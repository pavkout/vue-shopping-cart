import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/typescript-build', '@pinia/nuxt'],
  layout: 'default',
  typescript: {
    shim: false,
    typeCheck: true,
  },
  css: ['@/assets/css/styles.css', 'vue-toastification/dist/index.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
