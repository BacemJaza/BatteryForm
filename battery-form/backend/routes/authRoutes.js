import express from 'express'
// import authController from '../controllers/authController.js'
import loginLimiter from '../middleware/loginLimiter.js'

const router = express.Router()


router.route('/')
.post(loginLimiter)

router.route('/refresh')
.get()

router.route('logout')

.post()

export default router