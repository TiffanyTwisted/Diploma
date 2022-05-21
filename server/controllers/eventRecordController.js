const ApiError = require('../error/ApiError');
const { EventUser} = require('../models/models');
const uuid = require('uuid')
const path = require('path')

class eventRecordController {
   
    async createRecord(req, res, next) {
        try {
            const {UserId, EventId} = req.body
            const isActived = process.env.NEW_ENTRY
            const record = await EventUser.create({UserId,EventId, is_actived: isActived});
            return res.json(record)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAllRecords(req, res, next) {

        try {
            let { limit, page} = req.query; // query - find from search string
            const {UserId,EventId} = req.query
            let records;
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;
            if (UserId && EventId) {
                records = await EventUser.findAndCountAll({
                    where: {
                        UserId,
                        EventId
                    },
                    limit,
                    offset
                })
                console.log("Вызывается условие 1: всё есть")
            } else if (UserId && !EventId) {
                records = await EventUser.findAndCountAll({where: {
                        UserId
                    }, limit, offset})
                    console.log("Вызывается условие 2: только UserId")
            } else if (!UserId && EventId) {
                records = await EventUser.findAndCountAll({where: {
                    EventId
                    }, limit, offset})
                    console.log("Вызывается условие 3:только CourseId")
            }
            else {  records = await EventUser.findAndCountAll({ limit, offset})
            console.log("Вызывается условие 4: ничего нет")
            } 
            return res.json(records)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeStatusToInProcess(req, res, next) {
        try {
            const {EventId, UserId} = req.body

            if (UserId && EventId) {
               const record = await EventUser.update({ 
                   is_actived: process.env.IN_PROCESS
                }, { where: {
                        UserId,
                        EventId
                    } }
                )
            }  else {   next(ApiError.badRequest("Заявка не была найдена")) } 
            const updatedRecord = await EventUser.findOne({where: {
                UserId,
                EventId
            }})
            return res.json(updatedRecord)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeStatusToApproved(req, res, next) {
        try {
            const {EventId, UserId} = req.body

            if (UserId && EventId) {
               const record = await EventUser.update({ 
                   is_actived: process.env.APPROVED
                }, { where: {
                        UserId,
                        EventId
                    } }
                )
            }  else {   next(ApiError.badRequest("Заявка не была найдена")) } 
            const updatedRecord = await EventUser.findOne({where: {
                UserId,
                EventId
            }})
            return res.json(updatedRecord)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeStatusToCanceled(req, res, next) {
        try {
            const {EventId, UserId} = req.body

            if (UserId && EventId) {
               const record = await EventUser.update({ 
                   is_actived: process.env.CANCELED
                }, { where: {
                        UserId,
                        EventId
                    } }
                )
            }  else {   next(ApiError.badRequest("Заявка не была найдена")) } 
            const updatedRecord = await EventUser.findOne({where: {
                UserId,
                EventId
            }})
            return res.json(updatedRecord)

        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new eventRecordController()
