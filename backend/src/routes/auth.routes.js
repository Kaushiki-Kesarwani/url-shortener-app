import {Router} from 'express'
import { signup,logIn ,getMe,logOut} from '../controllers.js/auth.controller.js';
import { protect } from '../middleware.js/auth.middleware.js';

 const router = Router();

router.post('/signup',signup);
router.get('/me',protect,getMe);
router.post('/login',logIn);
router.post('/logout',logOut);

 export default router;