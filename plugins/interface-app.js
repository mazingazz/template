export default({app}, inject) => {
  const config = app.$device,
        withApp = {
          callIF(param) {
            let context = window,
                namespaces = [],
                func = param.fn,
                data = btoa(param.params)
            
            if (config.platform === 'APP_ANDROID') namespaces = ['window', 'HybridApp']
            if (config.platform === 'APP_IOS') namespaces = ['window', 'webkit', 'messageHandlers']

            for (const value of namespaces) context = context[value]

            try {
              if (config.platform === 'APP_ANDROID') context[func](data)
              if (config.platform === 'APP_IOS') context[func]['postMessage'](data)
            } catch(error) {
              alert('인터페이스 호출 실패', error)
            }
          }
        },
        withWeb = {
          MemberInfo(resData) {
            const param = '{"data": {"intgmbrno":"1234", "accesstoken":"1234", "refreshtoken":"1234"}, "callback":""}'
            let data = JSON.parse(resData || param)
            
            app.$config.auth = {}
            app.$config.auth.intgmbrno = data.data.intgmbrno
            app.$config.auth.accesstoken = data.data.accesstoken
            app.$config.auth.refreshtoken = data.data.refreshtoken

            // app.store.dispatch('addToken', data.data)
            let parampass = {
              message: 'no',
              params: {
                page: '2'
              },
            }
            let res = app.$axios.get('/incidents', parampass)
            
            if (app.$config.auth.accesstoken !== undefined) {
              app.$axios.defaults.headers.common["X-AUTH-TOKEN"] = app.$config.auth.accesstoken
            }
          },
          otherFunction() {
            console.log('app.$axios', app.$axios.defaults)
            delete app.$axios.defaults.headers.common["X-AUTH-TOKEN"]
          }
        }
  
  inject('interfaceApp', withApp)
  inject('interfaceWeb', withWeb)
}