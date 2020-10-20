export default({app}, inject) => {
  const config = app.$device,
        interfaceApp = {
          callIF: function(param) {
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
        }

  inject('interfaceApp', interfaceApp)
}