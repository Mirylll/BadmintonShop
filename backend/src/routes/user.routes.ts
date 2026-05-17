import { Router } from 'express';
import { userController } from '../controllers';

const router = Router();

router.get('/profile', userController.getProfile);
router.put('/profile', userController.updateProfile);
// admin-only
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
