const Router = require('express')
const router = new Router()
const courseController = require('../controllers/courseController')

router.post('/', courseController.createCourse)
router.get('/',courseController.getAllCourses)
router.get('/:id',courseController.getCourseByID)

module.exports = router