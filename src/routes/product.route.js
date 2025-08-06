import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { storeProduct } from "../controllers/product.controller.js";



 const router = Router()


router.route("/products").post(upload.single("image"), storeProduct)


export{router}