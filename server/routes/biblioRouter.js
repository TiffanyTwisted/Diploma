const Router = require('express')
const router = new Router()
const biblioController = require('../controllers/biblioController')

router.post('/', biblioController.createBiblio)
router.get('/', biblioController.getAllBiblio)
router.delete('/:id',biblioController.deleteBiblioById)

module.exports = router