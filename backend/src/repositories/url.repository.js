import { Url } from "../models/Url";

export const createUrl = async (data) =>{
const url = await Url.create(data);
return url;
}

export const findByShortCode = async(shortCode) =>{
    const url = await Url.findOne({shortCode});
    return url;
}

export const findByUser = async(userId)=>{
    const url = await Url.find(userId);
    return url;
}

export const findById = async(urlId)=>{
    const url = await findById(urlId);
    return url;
}

export const deleteById = async(urlId)=>{
    const url = await findByIdAndDelete(urlId);
    return url;
}

export const incrementClicks = async(shortCode)=>{
    const url = await findOneAndUpdate(
        {shortCode},
        {$inc : {click:1}},
        {new :true}
    );
    return url;
}