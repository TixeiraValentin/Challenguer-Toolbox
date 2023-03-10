const fileService = require('./service')

class FileController {
    async getAll(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const response = await fileService.getAll()
        res.status(200).json(response)
    }
    async getFileByName(req, res, next) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const fileName = req.query.fileName
        const response = await fileService.getFileByName(fileName)
        res.status(200).json(response)
    }
}

module.exports = new FileController()