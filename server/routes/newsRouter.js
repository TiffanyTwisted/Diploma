const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.post('/', newsController.createNews)
router.get('/', newsController.getAllNews)
router.get('/:id', newsController.getNewsByID)


module.exports = router