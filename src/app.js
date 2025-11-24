import express from "express";
import cors from "cors";

import ProductRoutes from "./routes/product.routes.js";


const app= express();

app.use(express.json());
app.use(cors());


// API Routes
app.use("/api/products",ProductRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/sliders", sliderRoutes);



export default app;