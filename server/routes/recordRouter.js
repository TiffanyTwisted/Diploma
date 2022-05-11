const Router = require('express')
const router = new Router()
const recordController = require('../controllers/recordController')

router.post('/',recordController.createRecord)
router.get('/',recordController.getAllRecords)
router.put('/process',recordController.changeStatusToInProcess)
router.put('/approve',recordController.changeStatusToApproved)
router.put('/cancel',recordController.changeStatusToCanceled)

module.exports = router