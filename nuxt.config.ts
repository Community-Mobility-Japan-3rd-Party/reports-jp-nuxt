import { Configuration } from '@nuxt/types';
import colors from 'vuetify/es5/util/colors';
// import purgecss from '@fullhuman/postcss-purgecss';
import cookieControlConfig from './nuxt-cookie-control.config';

const config: Configuration = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    [
      'nuxt-cookie-control',
      {
        barPosition: 'bottom-full',
        blockIframe: true,
        colors: {
          barBackground: '#000000e6'
        }
      }
    ],
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-162897034-1',
        config: {
          anonymize_ip: true,
          send_page_view: false
        },
        debug: true
      }
    ],
    '@nuxtjs/style-resources',
    'nuxt-purgecss'
  ],
  cookies: { cookieControlConfig },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.blueGrey.base,
          accent: colors.pink.lighten2,
          secondary: colors.blueGrey.darken4
        }
        /* dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        } */
      }
    }
  },
  styleResources: {
    scss: ['~/assets/variables.scss']
  },
  '@fullhuman/postcss-purgecss': {
    content: [
      './pages/**/*.vue',
      './layouts/**/*.vue',
      './components/**/*.vue',
      './node_modules/vuetify/dist/vuetify.js'
    ],
    whitelist: ['html', 'body', 'nuxt-progress'],
    whitelistPatterns: [/(col|row)/, /cookieControl/],
    whitelistPatternsChildren: [/cookieControl/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(_config: any, _ctx: any) {},
    postcss: {
      /* plugins: [
        purgecss({
        })
      ] */
    }
  }
};

export default config;
