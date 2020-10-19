export default ({$config}) => {
  if ($config.device === undefined) {
    const userAgent = window.navigator.userAgent.toLowerCase()
          ,ios = /iphone|ipod|ipad/.test(userAgent)
          ,safari = /safari/.test(userAgent)

    $config.device = 'APP_IOS'
    if (ios && !safari) $config.device = 'APP_IOS'
    if (window.HybridApp !== undefined) $config.device = 'APP_ANDROID'
  }
}
