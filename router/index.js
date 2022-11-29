const express = require('express');
const router = express.Router();


const dokterRouter = require("./dokter.router")
const pasienRouter = require('./pasien.router')
const rekmedRouter = require('./rekmed.router');
const userRouter = require('./user.router');

router.use('/dokter', dokterRouter)
router.use('/pasien', pasienRouter)
router.use('/rekmed', rekmedRouter)
router.use('/user', userRouter)

module.exports = router;