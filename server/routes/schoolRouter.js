const Router = require('express')
const router = new Router()
const schoolController = require('../controllers/schoolController')

router.post('/',schoolController.createSchool)
router.get('/',schoolController.getAllSchools)
router.get('/:id',schoolController.getSchoolByID)

module.exports = router