import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./src/db/db.js";


dotenv.config()
connectDB().then( ()=>{
     app.listen(8000  , () =>{
         console.log( "server listerning on port");
         
     } )
}).catch((error)=>{
    console.log("mongo db connection failed" , error);
    
})