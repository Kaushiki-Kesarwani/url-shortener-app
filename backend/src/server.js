import express from 'express'
import 'dotenv/config';
import {dbconnection} from './config/database.js'


const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Hey! Developer");
});

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


