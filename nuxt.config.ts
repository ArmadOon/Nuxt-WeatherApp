import {defineNuxtConfig} from 'nuxt'
import autoprefixer from "autoprefixer";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  publicRuntimeConfig: {
    WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
  },
  privateRuntimeConfig:{

  },

  css: [
    "~/assets/css/tailwind.css"
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer:{},
        },
      },
    },
  },
});
