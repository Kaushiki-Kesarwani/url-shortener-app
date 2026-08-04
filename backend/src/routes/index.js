import {Router} from 'express'
import auth from './auth.routes.js'
import url from './url.routes.js'

const routes = Router();
routes.use('/auth',auth);
routes.use('/url',url);

export default routes;

