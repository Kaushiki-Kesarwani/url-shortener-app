import {Router} from 'express'
import { redirectUrl,createUrl ,getUsersUrl} from '../controllers/url.controller.js';
import {protect} from '../middleware/auth.middleware.js'

const router = Router();
router.post("/", protect, createUrl);
router.get("/",protect,getUsersUrl);
router.get('/:shortCode',redirectUrl);

export default router;