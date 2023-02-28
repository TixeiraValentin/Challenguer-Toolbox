const fileRouter = require('express').Router()
const fileController = require('./controller')

fileRouter.get('/list', fileController.getAll)
fileRouter.get('/data', fileController.getFileByName)


module.exports = fileRouter