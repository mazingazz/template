const config = {
  test: process.env.NODE_ENV !== 'production' ? 'devdevdevelopment' : 'proproproduction',
  apiserver: process.env.NODE_ENV !== 'production' ? 'developement apiserver' : 'production vbvbvbvbv apiserver',
}
module.exports = {
  env: {
    dev:config.test,
    server:config.apiserver
  },
  buildDir: 'nuxt-dist',
  // dir: 'my-site', // dist
  mode: 'universal',
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
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/hello.js',
    '~/plugins/testPlugin.js'
  ],
  axios: {
    // 모듈 설정
    baseURL: process.env.BASE_URL || 'localhost'
  },
  router: {
    middleware: "check-before-move"
  }
}

