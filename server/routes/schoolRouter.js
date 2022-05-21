const Router = require('express')
const router = new Router()
const schoolController = require('../controllers/schoolController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', schoolController.createSchool)
router.get('/',schoolController.getAllSchools)
router.get('/:id',schoolController.getSchoolByID)
router.put('/:id', schoolController.updateSchoolInfo)

module.exports = router

//