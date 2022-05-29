const Router = require('express')
const router = new Router()
const schoolController = require('../controllers/schoolController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',      schoolController.createSchool)
router.get('/',       schoolController.getAllSchools)
router.get('/:id',    schoolController.getSchoolByID)
router.put('/',    schoolController.updateSchoolInfo)
router.delete('/:id', schoolController.deleteSchoolByID)

module.exports = router
