import { createUrl,findByShortCode ,incrementClicks} from "../repositories/url.repository";
import ApiError from '../errors/ApiError'
import generateShortCode from '../utils/ generateShortCode'

export const  createShortUrl = async (originalUrl,userId) =>{

    if(!originalUrl){
    throw new ApiError(400,"Original url is required");
    }

    if(!userId){
        throw new ApiError(401,"User authentication is required");
    }

    const shortCode = generateShortCode();

    const urlData = {
        originalUrl,
        shortCode,
        user:userId,
    } 

    const url = await createUrl(urlData);
    return url;
};


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