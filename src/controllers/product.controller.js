import { uploadoncloudinary } from "../../cloudinary.js"
import { Product } from "../models/product.models.js"

const storeProduct = async (req , res)=>{
      const {name , price , description , title} = req.body

      if ([name , price , description , title].some((item)=> item.trim() === "")) {
        throw new error("field is required")
      }

      const localprofilepath = req.file?.path
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

const getproduct = async(req , res)=>{
      
  const products = await Product.find()
    console.log(products);
    
  res.status(200).json({data:products})
}


const getoneproduct = async(req , res)=>{
  try {
     const {id} = req.params
    const product = await Product.findById(id)
    console.log(product);
    
    res.status(200).json({data:product})
  } catch (error) {
    console.log("error in getting id " , error)
  }
}

export{storeProduct ,getproduct , getoneproduct}
