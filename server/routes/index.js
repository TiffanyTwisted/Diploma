const Router = require('express')
const router = new Router()

// Get all routers
const courseRouter = require('./courseRouter')
const userRouter   = require('./userRouter')
const schoolRouter = require('./schoolRouter')
const eventRouter  = require('./eventRouter')
const recordRouter = require('./recordRouter')
const biblioRouter = require('./biblioRouter')
const newsRouter   = require('./newsRouter')

router.use('/user',   userRouter)
router.use('/school', schoolRouter)
router.use('/course', courseRouter)
router.use('/event',  eventRouter)
router.use('/record', recordRouter)
router.use('/biblio', biblioRouter)
router.use('/news',   newsRouter)

module.exports = router