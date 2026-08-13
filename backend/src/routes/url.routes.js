import {Router} from 'express'
import { redirectUrl } from '../controllers.js/url.controller';

const router = Router();

router.get('/:shortcode',redirectUrl);

export default router;