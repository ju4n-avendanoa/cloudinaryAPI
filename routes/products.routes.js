import { Router } from "express";
import * as userController from "../controllers/product.controller.js";
import fileUpload from "express-fileupload";

const router = Router();

router.get("/products", userController.getProducts);
router.get("/products/:id", userController.getProductById);
router.post(
  "/products",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  userController.createProduct
);
router.delete("/products/:id", userController.deleteProductById);
router.patch("/products/:id", userController.updateProductById);

export default router;
