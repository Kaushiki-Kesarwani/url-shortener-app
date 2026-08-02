import express from 'express'
import 'dotenv/config';
import {dbconnection} from './config/database.js'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cookieparser from 'cookie-parser'
import errorMiddleware from './middleware.js/error.middleware.js'

const app = express();

app.use(helmet());

app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true,
}));

app.use(express.json());

app.use(express.urlencoded({extended:true}));


const port = process.env.PORT || 6000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieparser());

app.use(compression());

app.use(morgan("dev"));

// app.get('/error',(req,res,next)=>{
//     const error = new error("Testing global error handler");
//     statusCode = 400;

//     next(error);
// });

app.use(errorMiddleware);

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


