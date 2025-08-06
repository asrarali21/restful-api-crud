import { uploadoncloudinary } from "../../cloudinary"

const storeProduct = async (req , res)=>{
      const {name , price , description , title} = req.body

      if ([name , price , description , title].some((item)=> item.trim() === "")) {
        throw new error("field is required")
      }
       

      const localprofilepath = req.file.image.path


      const image = await uploadoncloudinary(localprofilepath)



      
}

export{storeProduct}