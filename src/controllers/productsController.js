import Product from "../models/Product.js";


export const createProduct = async (req, res, next) => {
  try {
    const { name, category, price, rating, image } = req.body;

    if (!name || !category || !price || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.create({
      name,
      category,
      price,
      rating,
      image,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const { category } = req.query;

    const query = category
  ? { category: { $regex: new RegExp(`^${category}$`, "i") } }
  : {};


    const products = await Product.find(query);

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};


