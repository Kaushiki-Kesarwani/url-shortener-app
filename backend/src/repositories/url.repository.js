import { Url } from "../models/Url.js";

export const createUrl = async (data) =>{
const url = await Url.create(data);
return url;
}

export const findByShortCode = async(shortCode) =>{
    const url = await Url.findOne({shortCode});
    return url;
}

export const findByUserId = async(userId)=>{
    const url = await Url.find({user: userId});
    return url;
}

export const findByIdUrl = async(urlId)=>{
    const url = await Url.findById(urlId);
    return url;
}

export const deleteById = async(urlId,userId)=>{
    const url = await Url.findByIdAndDelete({
      _id:urlId,
      user:userId,
    });
    return url;
}

export const incrementClicks = async(shortCode)=>{
    const url = await Url.findOneAndUpdate(
        {shortCode},
        {$inc : {clicks:1}},
        {new :true}
    );
    return url;
}