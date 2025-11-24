import express from "express";
import { createProduct, deleteProduct, getProducts } from "../controllers/productsController.js";



const router = express.Router();

router.get("/", getProducts);

router.post("/",createProduct);

router.delete("/:id", deleteProduct);

export default router;
