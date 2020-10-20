export default (app) => {
  if (app.$device.platform === undefined) {
    const userAgent = window.navigator.userAgent.toLowerCase()
          ,ios = /iphone|ipod|ipad/.test(userAgent)
          ,safari = /safari/.test(userAgent)

    app.$device.platform = 'APP_IOS'
    if (ios && !safari) app.$device.platform = 'APP_IOS'
    if (window.HybridApp !== undefined) app.$device.platform = 'APP_ANDROID'
  }
  
  if (app.query.brand !== undefined) {

  }
}
