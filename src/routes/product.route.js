import { Router } from "express";
import { upload } from "../middleware/multer.middleware";
import { storeProduct } from "../controllers/product.controller";



 const router = Router


router.route("/products").post(upload.single("image"), storeProduct)


export{router}