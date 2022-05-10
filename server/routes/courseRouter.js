const Router = require('express')
const router = new Router()
const courseController = require('../controllers/courseController')

router.post('/', courseController.createCourse)
router.get('/',courseController.getAllCourses)
router.get('/:id',courseController.getCourseByID)
router.get('/?SchoolId='+':schoolid',courseController.getCoursesBySchoolID)
router.post('/record',courseController.createRecord)
router.get('/record',courseController.getAllRecords)


module.exports = router