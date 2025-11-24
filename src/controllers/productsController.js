import Product from "../models/Product";


export const getProducts = async (req, res, next) => {
  try {
    const { category } = req.query;

    let query = {};
    if (category) {
      query.category = category;
    }

    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
