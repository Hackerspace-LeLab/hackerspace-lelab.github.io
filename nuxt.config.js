module.exports = {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Join the Labspace' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google', content: 'notranslate' },
      { httpEquiv: 'Content-Language', content: 'en' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'shrink-to-fit=no' }
    ],
    htmlAttrs: [
      { lang: 'en' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/mdbootstrap@4.19.2/css/addons/flag.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vanta@0.5.21/vendor/three.r119.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'mdbvue/nuxt',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa'
  ],
  /**
   * Server middleware
   */
  serverMiddleware: {
    '/api': '~/api'
  },
  /*
  ** Font Awesome
  */
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  /*
  ** Nuxt Telemetry
  */
  telemetry: false,
  /*
  ** Nuxt PWA
  */
  pwa: {
    manifest: {
      background_color: '#000000'
    },
    meta: {
      theme_color: 'jarvis'
    },
    workbox: {
      enabled: true
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
