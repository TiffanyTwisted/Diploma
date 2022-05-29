const {Event} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError');

class eventController {
    async createEvent(req, res, next) {
        try {
            const {event_name, event_description, SchoolId, is_registrated} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            if(!is_registrated){
                is_registrated =  false
            }

            const event = await Event.create({event_name, event_description, SchoolId, img: fileName, is_registrated});
            console.log(event)
            return res.json(event)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
    async getAllEvents(req, res) {
        let {SchoolId, limit, page} = req.query; // query - find from search string
        let events;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        if (SchoolId) {
            events = await Event.findAndCountAll({where: { SchoolId }, limit, offset})
        } else {
            events = await Event.findAndCountAll({limit, offset})
        }
        return res.json(events)
    }
    async getEventByID(req, res) {
        const {id} = req.params
        const event = await Event.findOne({where: { id }})
        return res.json(event)
    }

    async deleteEventByID(req, res, next){
        try {
        let entry
        let is_deleted
        const {id} = req.params
        const record = await Event.findOne({where: {
            id
        }})
        if( record !== null){
            entry = await Event.destroy({where: {
                id
            }})
        }
        if( entry !== null){
            is_deleted = `Запись с id = ${id} была удалена`
        } 
        return res.json(is_deleted)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}
async updateEventByID(req, res, next) {
    try {
        let event
        const {id} = req.params
        const { event_name_new,  event_description_new } = req.body;
        event = await Event.findOne({where: {
                id
            }})
        if (!event) {
            next(ApiError.badRequest(`Запись с id = ${id} не найдена`))
        }

        if (event_name_new && event_description_new) {
            event = await Event.update({
                event_name: event_name_new, 
                event_description : event_description_new
            }, {
                where: {
                   id
                }
            })
        } if (!event_name_new && event_description_new) {
            event = await Event.update({
                event_description : event_description_new
            }, {
                where: {
                   id
                }
            })
        }
        if (event_name_new && !event_description_new) {
            event = await Event.update({
                event_description : event_description_new
            }, {
                where: {
                   id
                }
            })
        }
        if( !event ){
            next(ApiError.badRequest("Ничего не обновилось"))
        }
    
        return res.json(event)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }

}


}

module.exports = new eventController()
