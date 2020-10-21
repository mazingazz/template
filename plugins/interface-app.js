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
          MemberInfo(param) {
            // let data = JSON.parse(param)
            app.$config.auth_token = 'abcd1234'
            app.$axios.setHeader('X-AUTH-TOKEN', app.$config.auth_token)
          },
          otherFunction() {
            
          }
        }
  
  inject('interfaceApp', withApp)
  inject('interfaceWeb', withWeb)
}