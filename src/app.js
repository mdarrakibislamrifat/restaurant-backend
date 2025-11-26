import express from "express";
import cors from "cors";
import ProductRoutes from "./routes/product.routes.js";
import sliderRoutes from "./routes/slider.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import { connectDB } from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";


const app= express();



app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("API is working. Welcome to the backend.");
});


app.use(async(req,res,next)=>{
    await connectDB();
    next();
})




// API Routes
app.use("/api/products",ProductRoutes);
app.use("/api/products/:id", ProductRoutes);

app.use("/api/sliders", sliderRoutes);
app.use("/api/sliders/:id", sliderRoutes);

app.use("/api/categories", categoryRoutes);
app.use("/api/categories/:id", categoryRoutes);




app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error); 
});

// Error handling middleware
app.use(errorHandler);



export default app;
