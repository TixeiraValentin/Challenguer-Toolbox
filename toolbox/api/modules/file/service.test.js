require('assert');
const should = require('chai').should()
const FileService = require('./service')

describe('File Service', function () {




    describe('Format To Json', function () {
        it('Un archivo CSV válido, debe formatear y devolver un JSON', function () {
            const csv = `file,text,number,hex\ntest2.csv,UJEut\ntest2.csv,yNHcGVsB,040,c11ccc474bead2203d4e64af382555d1`
            const json = FileService.formatToJson(csv)
            json.file.should.equal("test2.csv")
            json.lines.should.have.lengthOf(1)
            json.lines[0].text.should.equal("yNHcGVsB")
            json.lines[0].number.should.equal(40)
            json.lines[0].hex.should.equal("c11ccc474bead2203d4e64af382555d1")
        });
        it('Un archivo CSV invalido, debe devolver null', function () {
            const csv = `file,text,number,hex`
            const json = FileService.formatToJson(csv)
            should.not.exist(json)
        });
        it('Un archivo null, que debe devolver null', function () {
            const json = FileService.formatToJson(null)
            should.not.exist(json)
        });
        it('Un archivo CSV, que alguno de sus campos sean null', function () {
            const json = FileService.formatToJson(null)
            should.not.exist(json)
        });
    });
});