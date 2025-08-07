import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { getoneproduct, getproduct, storeProduct } from "../controllers/product.controller.js";



 const router = Router()


router.route("/products").post(upload.single("image"), storeProduct)
router.route("/").get(getproduct)
router.route("/:id").get(getoneproduct)


export{router}