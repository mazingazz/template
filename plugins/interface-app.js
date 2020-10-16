export default ({app}, inject) => {
  let interfaceApp = {
    set: function() {
      const userAgent = window.navigator.userAgent.toLowerCase()
            ,ios = /iphone|ipod|ipad/.test(userAgent)
            ,safari = /safari/.test(userAgent)
            
      if (ios) {
        if (safari) {
          console.log('web safari')
          //browser
        } else if (!safari) {
          console.log('app safari')
          //webview
        }
      } else {
        //not iOS
        app.$config.device = 'not ios'
      }
      console.log('set interface', app.$util, window.test)
    },
    call: function(param) {
      let context = window
          ,namespaces = param.namespace.split(".")
          ,func = namespaces.pop() // 네임스페이스의 끝 함수

      for (const value of namespaces) context = context[value]

      console.log('context', typeof context, context)
      context[func].call(context, param.data)
    }
  }
  inject('interfaceApp', interfaceApp)
}


// const sendData = '{"callback": "callbackFunc", "data": {}}'
// const encData = btoa(sendData)

// window.HybridApp.func(encData)
// window.webkit.messageHandlers.func.postMessage(encData) 