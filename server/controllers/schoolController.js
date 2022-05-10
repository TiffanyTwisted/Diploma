const uuid = require('uuid')
const path = require('path')
const {School} = require('../models/models')
const ApiError = require('../error/ApiError');

class schoolController {
    async createSchool(req, res, next) {
        try {
            const {school_name, school_description} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const school = await School.create({school_name, school_description, img: fileName})

            return res.json(school)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }
    async getAllSchools(req, res) {
        const schools = await School.findAll()
        return res.json(schools)
    }
    async getSchoolByID(req, res) {
        const {id} = req.params
        const school = await School.findOne({where: {
                id
            }})
        return res.json(school)
    }
    async updateSchoolInfo(req, res, next) {
        try { // Constants
            const {school_description} = req.body;
            const {id} = req.params
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const school = await School.update({
                school_description,
                img: fileName
            }, {where: {
                    id
                }})
            const updatedSchool = await School.findOne({where: {
                    id
                }})

            return res.json(updatedSchool)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }
    async deleteSchool(req, res) {}
}

module.exports = new schoolController()
