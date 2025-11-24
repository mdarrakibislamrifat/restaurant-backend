
import Slider from "../models/Slider.js"; 

export const createSlider = async (req, res, next) => {
  try {
    const { 
      title, 
      description, 
      bgLeft, 
      bgMiddle, 
      bgRight, 
      heroImage, 
      thumbnails,
      slug,
      order 
    } = req.body;

    // Validation
    if (!title || !heroImage || !thumbnails || thumbnails.length !== 4) {
      return res.status(400).json({ 
        message: "Title, heroImage, and exactly 4 thumbnails are required" 
      });
    }

    const newSlider = await Slider.create({
      slug: slug || title.toLowerCase().replace(/\s+/g, '-'),
      title,
      description,
      bgLeft,
      bgMiddle,
      bgRight,
      heroImage,
      thumbnails,
      order: order || 0
    });

    res.status(201).json({
      success: true,
      data: newSlider
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Slide with this slug already exists" });
    }
    next(error);
  }
};

export const getSliders = async (req, res, next) => {
  try {
    const sliders = await Slider.find({ active: true })
      .sort({ order: 1 })
      .select('-__v'); 

    res.status(200).json({
      success: true,
      count: sliders.length,
      data: sliders
    });
  } catch (error) {
    next(error);
  }
};

export const getSliderBySlug = async (req, res, next) => {
  try {
    const slider = await Slider.findOne({ 
      slug: req.params.slug, 
      active: true 
    });

    if (!slider) {
      return res.status(404).json({ message: "Slide not found" });
    }

    res.status(200).json({
      success: true,
      data: slider
    });
  } catch (error) {
    next(error);
  }
};