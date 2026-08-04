import {Router} from 'express'

const route = Router();

route.get('/url',(req,res)=>{
    res.json({
        success:true,
        message:"url route is working"
    });
});

export default route;