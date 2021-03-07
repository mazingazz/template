module.exports = {
  // server: {
  //   port: process.env.PORT || 3001, // default: 3000
  // },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  buildDir: 'nuxt-dist',
  // dir: 'my-site', // dist
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'begin-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/device'
  ],
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/btreeview', ssr: false },
    '~/plugins/hello.js',
    '~/plugins/testPlugin.js',
    '~/plugins/interface-app.js',
    '~/plugins/global-components.js',
    '~/plugins/util.js'
  ],
  axios: {
    // 모듈 설정
    baseURL: process.env.BASE_API_URL || 'localhost'
  },
  router: {
    middleware: [
      'check-before-move',
      'set-default'
    ]
  }
}

