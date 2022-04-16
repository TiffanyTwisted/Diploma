const {Event} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError');

class eventController {
    async createEvent(req, res) {
        try {
            const {event_name, event_description, SchoolId} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const event = await Event.create({event_name, event_description, SchoolId, img: fileName});
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
}

module.exports = new eventController()
