const uuid = require('uuid')
const path = require('path')
const {News} = require('../models/models')
const ApiError = require('../error/ApiError');

class newsController {
    async createNews(req, res, next) {
        try {
            const {pretext, title, summary} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.img'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const news = await News.create({pretext, title, summary, img: fileName})
            return res.json(news)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async getAllNews(req, res) {
        let { limit, page} = req.query; // query - find from search string
        let news;
        page = page || 1;
        limit = limit || 9;       
        let offset = page * limit - limit;
        news = await News.findAll({ order: [ [ 'updatedAt', 'DESC' ] ], limit, offset}) // new news are retrieved at first

        return res.json(news)
    }

    async getNewsByID(req, res) {
        const {id} = req.params
        const news = await News.findOne({where: {
                id
            }})
        return res.json(news)
    }
}

module.exports = new newsController()
