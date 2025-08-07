import mongoose from "mongoose"

export const connectDB = async ( )=>{
     try {
            const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`mongo db connected: , ${connectionInstance.connection.host}`);
     } catch (error) {
        console.log("mongo db connection error" , error);
     }
    
}