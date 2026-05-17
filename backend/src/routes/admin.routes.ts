import { Router } from 'express';
import { adminController } from '../controllers';

const router = Router();

router.get('/dashboard', adminController.getDashboard);
router.get('/ai-config', adminController.getAiConfig);
router.put('/ai-config', adminController.updateAiConfig);

export default router;
