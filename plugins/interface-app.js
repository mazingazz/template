export default ({app}, inject) => {
  let interfaceApp = {
    call: function(param) {
      let context = window
          ,namespaces = null
          ,func = param.fn
          ,data = btoa(param.params)
      
      if (app.$config.device === 'APP_ANDROID') namespaces = ['window', 'HybridApp']
      if (app.$config.device === 'APP_IOS') namespaces = ['window', 'webkit', 'messageHandlers']

      for (const value of namespaces) context = context[value]

      try {
        if (app.$config.device === 'APP_ANDROID') context[func].call(null, data)
        if (app.$config.device === 'APP_IOS') context[func]['postMessage'].call(null, data)
      } catch(e) {
        console.error(e)
      }
    }
  }

  inject('interfaceApp', interfaceApp)
}