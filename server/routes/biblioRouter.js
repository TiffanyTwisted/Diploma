const Router = require('express')
const router = new Router()
const biblioController = require('../controllers/biblioController')

router.post('/', biblioController.createBiblio)
router.get('/', biblioController.getAllBiblio)

module.exports = router