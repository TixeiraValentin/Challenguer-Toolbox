const https = require('https');

class FileService {

    async getAll() {
        const promisesArray = []
        const allFileNames = await this.getAllFilesNames()
        allFileNames.files.forEach((file) => {
            const p = this.getFileByName(file)
            promisesArray.push(p)
        })
        const jsonFiles = await Promise.all(promisesArray)
        return jsonFiles.filter((file) => Boolean(file))
    }

    async getAllFilesNames() {
        let data = ""
        const options = {
            hostname: 'echo-serv.tbxnet.com',
            path: '/v1/secret/files',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer aSuperSecretKey'
            }
        };
        const promise = new Promise(
            (resolve, reject) => {
                const request = https.request(options, response => {
                    response.on('data', chunk => {
                        data += chunk;
                    });
                    response.on('end', () => {
                        try {
                            const parsedData = JSON.parse(data);
                            resolve(parsedData)
                        } catch (error) {
                            reject(JSON.parse(error))
                        }
                    });
                });

                request.on('error', error => {
                    reject(JSON.parse(error))
                });

                request.end();
            }
        )
        return promise
    }

    async getFileByName(fileName) {
        if (!fileName) return { error: "error" }

        const csvFile = await this.getExternalCsv(fileName)
        if (!csvFile) return { error: "Do not exits CSV file." }
        
        return this.formatToJson(csvFile)
    }

    formatToJson(csvFile) {
        if (!csvFile) return null;

        const lines = csvFile.split('\n');
        const headers = lines[0].split(',');

        const formattedData = lines.slice(1).reduce((result, line) => {
            const values = line.split(',');
            if (values.length !== headers.length) return result;

            const obj = headers.reduce((obj, header, index) => {
                obj[header] = values[index];
                return obj;
            }, {});

            const file = obj.file;
            if (!result[file]) {
                result[file] = { file, lines: [] };
            }

            result[file].lines.push({
                text: obj.text,
                number: parseInt(obj.number),
                hex: obj.hex
            });

            return result;
        }, {});
        return formattedData[Object.keys(formattedData)[0]]
    }

    async getExternalCsv(fileName) {
        if (!fileName) return { error: "error" }
        
        const promise = new Promise(
            (resolve, reject) => {
                const filePath = `/v1/secret/file/${fileName}`;
                const options = {
                    hostname: 'echo-serv.tbxnet.com',
                    path: filePath,
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer aSuperSecretKey'
                    }
                };

                const request = https.request(options, response => {
                    let data = '';

                    response.on('data', chunk => {
                        data += chunk;
                    });

                    response.on('end', () => {
                        resolve(data)
                    });
                });

                request.on('error', error => {
                    reject(JSON.parse(error))
                });
                request.end();
            }
        )
        return promise
    }
}

module.exports = new FileService()