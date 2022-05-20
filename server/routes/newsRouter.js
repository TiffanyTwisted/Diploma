const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.post('/', newsController.createNews)
router.get('/', newsController.getAllNews)

module.exports = router