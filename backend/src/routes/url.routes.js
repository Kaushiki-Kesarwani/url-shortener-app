import {Router} from 'express'
import { redirectUrl,createUrl } from '../controllers/url.controller.js';
import {protect} from '../middleware/auth.middleware.js'

const router = Router();
router.post("/", protect, createUrl);
router.get('/:shortCode',redirectUrl);

export default router;