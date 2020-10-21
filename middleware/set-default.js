export default (app) => {
  // 디바이스 정보 설정
  if (app.$device.platform === undefined) {
    const userAgent = window.navigator.userAgent.toLowerCase()
          ,ios = /iphone|ipod|ipad/.test(userAgent)
          ,safari = /safari/.test(userAgent)

    app.$device.platform = 'APP_IOS'
    if (ios && !safari) app.$device.platform = 'APP_IOS'
    if (window.HybridApp !== undefined) app.$device.platform = 'APP_ANDROID'
  }
 
  Object.assign(window, app.$interfaceWeb)
}