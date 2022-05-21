const ApiError = require('../error/ApiError');
const {Course, CourseUser} = require('../models/models');
const uuid = require('uuid')
const path = require('path')

class courseController {
    async createCourse(req, res, next) {
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
            courses = await Course.findAndCountAll({where: {
                    SchoolId
                }, limit, offset})
        } else {
            courses = await Course.findAndCountAll({limit, offset})
        }

        return res.json(courses)
    }
    async getCourseByID(req, res) {
        const {id} = req.params
        const course = await Course.findOne({where: {
                id
            }})
        return res.json(course)
    }

    async getCoursesBySchoolID(req, res) {
        const {SchoolId} = req.params
        const courses = await Course.findAll({where: {
                SchoolId
            }})
        return res.json(courses)
    }

    async createRecord(req, res, next) {
        try {
            const {UserId, CourseId} = req.body
            const isActived = process.env.NEW_ENTRY
            const record = await CourseUser.create({UserId, CourseId, is_actived: isActived});
            return res.json(record)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAllRecords(req, res, next) {

        try {
            let {UserId, limit, page} = req.query; // query - find from search string
            const {CourseId} = req.params
            let records;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;
            if (UserId && CourseId) {
                records = await CourseUser.findAndCountAll({
                    where: {
                        UserId,
                        CourseId
                    },
                    limit,
                    offset
                })
            } else if (UserId && !CourseId) {
                records = await CourseUser.findAndCountAll({where: {
                        UserId
                    }, limit, offset})
            } else {  records = await CourseUser.findAndCountAll({ limit, offset}) } 
            return res.json(records)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeStatusToInProcess(req, res, next) {
        try {
            const {CourseId, UserId} = req.body

            if (UserId && CourseId) {
               const record = await CourseUser.update({ 
                   is_actived: process.env.IN_PROCESS
                }, { where: {
                        UserId,
                        CourseId
                    } }
                )
            }  else {   next(ApiError.badRequest("Заявка не была найдена")) } 
            const updatedRecord = await  CourseUser.findOne({where: {
                UserId,
                CourseId
            }})
            return res.json(updatedRecord)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeStatusToApproved(req, res, next) {
        try {
            const {CourseId, UserId} = req.params

            if (UserId && CourseId) {
               const record = await CourseUser.update({ 
                   is_actived: process.env.APPROVED
                }, { where: {
                        UserId,
                        CourseId
                    } }
                )
            }  else {   next(ApiError.badRequest("Заявка не была найдена")) } 
            const updatedRecord = await  CourseUser.findOne({where: {
                UserId,
                CourseId
            }})
            return res.json(updatedRecord)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeStatusToCanceled(req, res, next) {
        try {
            const {CourseId, UserId} = req.params

            if (UserId && CourseId) {
               const record = await CourseUser.update({ 
                   is_actived: process.env.CANCELED
                }, { where: {
                        UserId,
                        CourseId
                    } }
                )
            }  else {   next(ApiError.badRequest("Заявка не была найдена")) } 
            const updatedRecord = await  CourseUser.findOne({where: {
                UserId,
                CourseId
            }})
            return res.json(updatedRecord)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new courseController()
