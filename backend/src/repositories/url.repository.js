import { Url } from "../models/Url.js";

export const createUrl = async (data) =>{
const url = await Url.create(data);
return url;
}

export const findByShortCode = async(shortCode) =>{
    const url = await Url.findOne({shortCode});
    return url;
}

export const findByUser = async(userId)=>{
    const url = await Url.find({user: userId});
    return url;
}

export const findByIdUrl = async(urlId)=>{
    const url = await Url.findById(urlId);
    return url;
}

export const deleteById = async(urlId)=>{
    const url = await Url.findByIdAndDelete(urlId);
    return url;
}

export const incrementClicks = async(shortCode)=>{
    const url = await Url.findOneAndUpdate(
        {shortCode},
        {$inc : {click:1}},
        {new :true}
    );
    return url;
}