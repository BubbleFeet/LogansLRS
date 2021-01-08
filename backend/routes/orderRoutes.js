import express from 'express'
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById) // important that this goes under the '/' route as any URL that is '/*' will think it is an id
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
