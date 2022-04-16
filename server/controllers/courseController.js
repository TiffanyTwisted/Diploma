const ApiError = require('../error/ApiError');
const {Course} = require('../models/models');
const uuid = require('uuid')
const path = require('path')

class courseController {
    async createCourse(req, res) {

        try {
            const {course_name, course_description, SchoolId} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const course = await Course.create({course_name, course_description, SchoolId, img: fileName});

            return res.json(course)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAllCourses(req, res) {
        let {SchoolId, limit, page} = req.query; // query - find from search string
        let courses;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        if (SchoolId) {
            courses = await Course.findAndCountAll( {where : {SchoolId},limit, offset} )
        }else{
            courses = await Course.findAndCountAll( {limit, offset} )
        }

        return res.json(courses)
    }
    async getCourseByID(req, res) {
        const {id} = req.params
        const course = await Course.findOne({where: { id }})
        return res.json(course)
    }
}

module.exports = new courseController()
