import express from 'express'
import dotenv from 'dotenv'
import {dbconnection} from './config/database.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () =>{
    try{
        await dbconnection();
        app.listen(port,()=>{
console.log(`🚀 Server is starting at ${port} port.`)
        });
    }catch(error){
 console.error("❌ Database connection failed:", error);
    }
}

startServer();
