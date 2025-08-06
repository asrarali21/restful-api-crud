import { uploadoncloudinary } from "../../cloudinary.js"
import { Product } from "../models/product.models.js"

const storeProduct = async (req , res)=>{
      const {name , price , description , title} = req.body

      if ([name , price , description , title].some((item)=> item.trim() === "")) {
        throw new error("field is required")
      }
       

      const localprofilepath = req.file.path
      console.log("Uploaded file:", req.file);
    
if (!localprofilepath) {
  throw new Error("Image is required");
}

      const image = await uploadoncloudinary(localprofilepath)
    

if (!image || !image.url) {
  throw new Error("Image upload to Cloudinary failed");
}
      const product = await Product.create({
        name , 
        price , 
        description , 
        title,
        image:image.url
      })

  return res.status(200).json({
  success: true,
  message: "Product created successfully",
  data: product,
});

      
}

export{storeProduct}