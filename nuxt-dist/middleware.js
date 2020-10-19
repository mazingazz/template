const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['check-before-move'] = require('..\\middleware\\check-before-move.js')
middleware['check-before-move'] = middleware['check-before-move'].default || middleware['check-before-move']

middleware['set-config'] = require('..\\middleware\\set-config.js')
middleware['set-config'] = middleware['set-config'].default || middleware['set-config']

export default middleware
