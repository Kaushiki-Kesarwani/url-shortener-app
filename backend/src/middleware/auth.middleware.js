import jwt from 'jsonwebtoken'
import ApiError from '../errors/ApiError.js'
import {findById} from '../repositories/user.repository.js'
import asyncHandler from "../utils/asyncHandler.js";

export const protect = asyncHandler(async (req,res,next)=>{
const token = req.cookies.token;

if(!token){
    throw new ApiError(401,"unauthorized");
}

const decoded = jwt.verify(token,process.env.JWT_SECRET);

const user = await findById(decoded.userId);

if(!user){
    throw new ApiError(401,"unauthorized");
}

req.user = user;

next();
});