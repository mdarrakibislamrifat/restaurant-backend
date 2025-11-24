import express from "express";
import { getSliders, createSlider } from "../controllers/slider.controller.js";

const router = express.Router();

router.get("/", getSliders);
router.post("/", createSlider); 

export default router;

