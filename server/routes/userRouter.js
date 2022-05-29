const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware,  userController.check )
router.get('/info/:id',  userController.readUserInfo )
router.delete('/:id', userController.deleteUserByID )
router.put('/:id', userController.changeRoleByIDToManager )

module.exports = router