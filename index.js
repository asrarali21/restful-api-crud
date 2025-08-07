import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./src/db/db.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

connectDB().then( ()=>{
     app.listen(8000  , () =>{
         console.log( "server listerning on port");
         
     } )
}).catch((error)=>{
    console.log("mongo db connection failed" , error);
    
})