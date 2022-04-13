const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventController')

router.post('/', eventController.createEvent)
router.get('/', eventController.getAllEvents)
router.get('/:id', eventController.getEventByID)

module.exports = router
