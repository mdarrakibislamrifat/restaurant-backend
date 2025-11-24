import Category from "../models/Category.js";
import Product from "../models/Product.js";


export const createProduct = async (req, res, next) => {
  try {
    const { name, category, price, rating, image } = req.body;

    if (!name || !category || !price || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    const product = await Product.create({
      name,
      category, 
      price,
      rating,
      image,
    });

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};



export const getProducts = async (req, res, next) => {
  try {
    const { category } = req.query;

    let query = {};

    if (category) {
      const categoryDoc = await Category.findOne({
  name: { $regex: `^${category}$`, $options: "i" } 
});

      if (categoryDoc) {
        query.category = categoryDoc._id;
      } else {
        return res.status(200).json([]);
      }
    }

    const products = await Product.find(query).populate("category");
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};



// Delete product
export const deleteProduct=async(req,res,next)=>{
console.log(req.params.id)
  try{
    const product=await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({message:"Product not found"});
    }
    await product.deleteOne();
    res.status(200).json({message:"Product deleted successfully"});
  }catch(error){
    next(error);
  }
}


