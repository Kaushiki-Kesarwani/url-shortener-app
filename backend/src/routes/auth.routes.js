import {Router} from 'express'

 const route = Router();

route.get('/',(req,res)=>{
res.json({
    success:true,
    message:"Auth routes working"
});
 });

 export default route;