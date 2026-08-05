import bcrypt from 'bcryptjs'
import ApiError from '../errors/ApiError.js'
import {createUser,findByEmail} from '../repositories/user.repository.js'


export const createUserService = async({fullname,email,password})=>{
   const emailExists = await findByEmail(email);

   if(emailExists){
  throw new ApiError(409,"user already exists.");
   }

 const hashedPassword = await bcrypt.hash(password,10); 

const user = await createUser({
    fullname,
    email,
    password:hashedPassword,
    });
  return {
   id: user._id,
    fullname: user.fullname,
    email: user.email,
  }
}

