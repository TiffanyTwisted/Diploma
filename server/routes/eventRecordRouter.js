const Router = require('express')
const router = new Router()
const eventRecordController = require('../controllers/eventRecordController')

router.post('/',eventRecordController.createRecord)
router.get('/',eventRecordController.getAllRecords)
router.put('/process',eventRecordController.changeStatusToInProcess)
router.put('/approve',eventRecordController.changeStatusToApproved)
router.put('/cancel',eventRecordController.changeStatusToCanceled)

module.exports = router