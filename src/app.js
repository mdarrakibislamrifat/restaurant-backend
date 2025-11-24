import express from "express";
import cors from "cors";

import ProductRoutes from "./routes/product.routes.js";
import sliderRoutes from "./routes/slider.routes.js";


const app= express();

app.use(express.json());
app.use(cors());


// API Routes
app.use("/api/products",ProductRoutes);
app.use("/api/sliders", sliderRoutes);



export default app;