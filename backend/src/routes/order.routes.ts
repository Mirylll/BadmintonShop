import { Router } from 'express';
import { orderController } from '../controllers';

const router = Router();

router.get('/', orderController.getOrders);
router.get('/:id', orderController.getOrder);
router.post('/', orderController.createOrder);
router.put('/:id/cancel', orderController.cancelOrder);

export default router;
