const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.post('/', newsController.createNews)
router.get('/', newsController.getAllNews)
router.get('/:id', newsController.getNewsByID)
router.delete('/:id', newsController.deleteNewsByID)
router.put('/:id', newsController.updateNewsByID)


module.exports = router