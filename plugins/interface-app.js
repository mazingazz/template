const sendData = '{"callback": "callbackFunc", "data": {}}'
const encData = btoa(sendData)

window.HybridApp.func(encData)
window.webkit.messageHandlers.func.postMessage(encData) 