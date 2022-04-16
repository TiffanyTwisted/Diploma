const Router = require('express')
const router = new Router()
const schoolController = require('../controllers/schoolController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('manager'), schoolController.createSchool)
router.get('/',schoolController.getAllSchools)
router.get('/:id',schoolController.getSchoolByID)

module.exports = router