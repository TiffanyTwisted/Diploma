const ApiError = require('../error/ApiError');
const { CourseUser} = require('../models/models');
const uuid = require('uuid')
const path = require('path')

class recordController {
   
    async createRecord(req, res, next) {
        try {
            const {UserId, CourseId} = req.body
            const isActived = process.env.NEW_ENTRY
            console.log(isActived)
            const record = await CourseUser.create({UserId, CourseId, is_actived: isActived});
            return res.json(record)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAllRecords(req, res, next) {

        try {
            let { limit, page} = req.query; // query - find from search string
            const {UserId,CourseId} = req.query
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
                console.log("Вызывается условие 1: всё есть")
            } else if (UserId && !CourseId) {
                records = await CourseUser.findAndCountAll({where: {
                        UserId
                    }, limit, offset})
                    console.log("Вызывается условие 2: только UserId")
            } else if (!UserId && CourseId) {
                records = await CourseUser.findAndCountAll({where: {
                    CourseId
                    }, limit, offset})
                    console.log("Вызывается условие 3:только CourseId")
            }
            else {  records = await CourseUser.findAndCountAll({ limit, offset})
            console.log("Вызывается условие 4: ничего нет")
            } 
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
            const {CourseId, UserId} = req.body

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
            const {CourseId, UserId} = req.body

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

    async deleteRecordByID(req, res, next){
        try {
        let count
        let is_deleted
        const {id} = req.params
        const record = await CourseUser.findOne({where: {
            id
        }})
        if( record !== null){
             count = await CourseUser.destroy({where: {
                id
            }})
        }
        if( count !== null){
            is_deleted = `Запись с id = ${id} была удалена`
        } 
        return res.json(is_deleted)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
    }

    async getRecordByID (req, res, next){
        try {
        let count
        const {id} = req.params
        const record = await CourseUser.findOne({where: {
            id
        }})
        return res.json(record)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
    }
}

module.exports = new recordController()
