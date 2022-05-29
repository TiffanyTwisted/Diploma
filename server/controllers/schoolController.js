const uuid = require('uuid')
const path = require('path')
const {School} = require('../models/models')
const ApiError = require('../error/ApiError');

class schoolController {
    async createSchool(req, res, next) {
        let fileName
        try {
            const {school_name, school_description, phone, link} = req.body;
            const {img} = req.files;
            if (!img){
               fileName = ''
            } else {
                fileName = uuid.v4() + ".jpg"
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
            }

            const school = await School.create({school_name, school_description, img: fileName, phone, link})

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
            const {school_description, school_name, id} = req.body;
            //const {id} = req.params
            console.log("Вывод", school_description, school_name, id)
            const school = await School.update({
                school_description : school_description,
                school_name :  school_name
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
    async deleteSchoolByID(req, res, next){
        try {
        let school
        let is_deleted
        const {id} = req.params
        const record = await School.findOne({where: {
            id
        }})
        if( record !== null){
            school = await School.destroy({where: {
                id
            }})
        }
        if( school !== null){
            is_deleted = `Запись с id = ${id} была удалена`
        } 
        return res.json(is_deleted)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
    }
}

module.exports = new schoolController()
