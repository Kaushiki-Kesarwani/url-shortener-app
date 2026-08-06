import {User} from '../models/User.js'

export const createUser= async ({fullname,email,password})=>{

return await User.create({
fullname,
email,
password  
});
}

export const findByEmail= async(email)=>{
return await User.findOne({email});
}

export const findById = async(id)=>{
return await User.findById(id);
}
