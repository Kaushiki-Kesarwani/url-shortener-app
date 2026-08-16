import { createUrl,findByShortCode ,incrementClicks,findByUserId} from "../repositories/url.repository.js";
import ApiError from '../errors/ApiError.js'
import generateShortCode from '../utils/ generateShortCode.js'
import asyncHandler from "../utils/asyncHandler.js";

export const  createShortUrl = async (originalUrl,userId) =>{

    if(!originalUrl){
    throw new ApiError(400,"Original url is required");
    }

    if(!userId){
        throw new ApiError(401,"User authentication is required");
    }

    const MAX_RETRIES = 5;
    for(let attempt = 0; attempt<MAX_RETRIES; attempt++){
         const shortCode = generateShortCode();
try{
    const url = await createUrl({
        originalUrl,
        shortCode,
        user:userId,
    }); 
    return url;
}catch(error){
 if(error.code !== 11000){
    throw error;
 }
}
}
throw new ApiError(500,"Unable to generate short url");
}


export const getUrlByShortCode = async(shortCode)=>{
    const url = await findByShortCode(shortCode);

    if(!url){
        throw new ApiError(404,"url not found");
    }

    if(url.expiresAt && url.expiresAt< new Date()){
       throw new ApiError(410,"short url has expired"); 
    }

     await incrementClicks(shortCode);

    return url;
}

export const getUserUrls = async(userId)=>{
    const url = await findByUserId(userId);
    return url;
}