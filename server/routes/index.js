const Router = require('express')
const router = new Router()

// Get all routers
const courseRouter = require('./courseRouter')
const userRouter   = require('./userRouter')
const schoolRouter = require('./schoolRouter')
const eventRouter  = require('./eventRouter')
const recordRouter = require('./recordRouter')

router.use('/user',   userRouter)
router.use('/school', schoolRouter)
router.use('/course', courseRouter)
router.use('/event',  eventRouter)
router.use('/record', recordRouter)

module.exports = router