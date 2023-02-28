const fileRouter = require('express').Router()
const fileController = require('./controller')

fileRouter.get('/', fileController.getAll)
fileRouter.get('/', fileController.getFile)


module.exports = fileRouter