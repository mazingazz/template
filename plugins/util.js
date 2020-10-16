export default ({app}, inject) => {
  let util = {
    strToFunc: function(functionName, param) {
      let context = window
          ,namespaces = functionName.split(".")
          ,func = namespaces.pop() // 네임스페이스의 끝 함수

      for (const value of namespaces) context = context[value]

      console.log('context', typeof context, context)
      return context[func].call(context, param);
    }
  }
  inject('util', util)
}