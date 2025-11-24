import express from "express";
import { getSliders, createSlider, deleteSlider } from "../controllers/sliderController.js";

const router = express.Router();

router.get("/", getSliders);
router.post("/", createSlider); 
router.delete("/:id", deleteSlider);

export default router;

