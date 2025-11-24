import express from "express";
import { getSliders, createSlider } from "../controllers/sliderController.js";

const router = express.Router();

router.get("/", getSliders);
router.post("/", createSlider); 

export default router;

