import bcrypt from 'bcryptjs'
import ApiError from '../errors/ApiError.js'
import {createUser,findByEmail} from '../repositories/user.repository.js'
import jwt from 'jsonwebtoken'



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

export const authUserService = async({email,password})=>{
  const existingUser = await findByEmail(email);
  if(!existingUser){
    throw new ApiError(401,"Invalid email or password");
  }

  const existingPassword = await bcrypt.compare(password,existingUser.password);
  if(!existingPassword){
      throw new ApiError(401,"Invalid email or password");
  }

  const token = jwt.sign(
    {
    userId : existingUser._id,
    },
    process.env.JWT_SECRET,
    {
    expiresIn:"7d",
    }
  );

  return {
    token,
    user: {
        id: existingUser._id,
        fullname: existingUser.fullname,
        email: existingUser.email,
    },
};
 
}





