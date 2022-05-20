const uuid = require('uuid')
const path = require('path')
const {Biblio} = require('../models/models')
const ApiError = require('../error/ApiError');

class biblioController {
    async createBiblio(req, res, next) {
        try {
            const {title, SchoolId} = req.body;
            const {file} = req.files;
            let prefix

            if (file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                prefix = '.docx'
            }  prefix = '.txt'
            let fileName = uuid.v4() + prefix
            file.mv(path.resolve(__dirname, '..', 'static', fileName))
            console.log(file)

            const biblio = await Biblio.create({title, SchoolId, file: fileName})
            return res.json(biblio)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async getAllBiblio(req, res) {
        let {SchoolId, limit, page} = req.query; // query - find from search string
        let biblio;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        if (SchoolId) {
           biblio = await Biblio.findAndCountAll({where: {
                    SchoolId
                }, limit, offset})
        } else {
            biblio = await Biblio.findAndCountAll({limit, offset})
        }

        return res.json(biblio)
    }
}

module.exports = new biblioController()
