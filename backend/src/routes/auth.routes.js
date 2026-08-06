import {Router} from 'express'
import { signup,logIn } from '../controllers.js/auth.controller.js';

 const route = Router();

route.post('/signup',signup);
route.post('/login',logIn);

 export default route;