import mongoose from 'mongoose'

export const dbconnection = async () =>{
    try{
const db = await mongoose.connect(process.env.MONGODB_URI,)
console.log(`MongoDB connected : ${db.connection.host}`);
    }catch(error){
console.log(error.message);
process.exit(1);
    } 
}