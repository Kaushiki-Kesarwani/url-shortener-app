import {Router} from 'express'
import { redirectUrl,createUrl ,getUsersUrl,deleteUserUrl} from '../controllers/url.controller.js';
import {protect} from '../middleware/auth.middleware.js'

const router = Router();
router.post("/", protect, createUrl);
router.get("/",protect,getUsersUrl);
router.delete("/:urlId",protect,deleteUserUrl);
router.get('/:shortCode',redirectUrl);

export default router;