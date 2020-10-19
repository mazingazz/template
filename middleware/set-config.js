export default ({$device}) => {
  if ($device.platform === undefined) {
    const userAgent = window.navigator.userAgent.toLowerCase()
          ,ios = /iphone|ipod|ipad/.test(userAgent)
          ,safari = /safari/.test(userAgent)

    $device.platform = 'APP_IOS'
    if (ios && !safari) $device.platform = 'APP_IOS'
    if (window.HybridApp !== undefined) $device.platform = 'APP_ANDROID'
  }
}
