import Slider from "../models/Slider.js";

export const createSlider = async (req, res, next) => {
  try {
    const { title, subtitle, image } = req.body;

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const slider = await Slider.create({ title, subtitle, image });

    res.status(201).json(slider);
  } catch (error) {
    next(error);
  }
};

export const getSliders = async (req, res, next) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json(sliders);
  } catch (error) {
    next(error);
  }
};
