// models/Slider.js
import mongoose from 'mongoose';

const HeroSlideSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, lowercase: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  bgLeft: { type: String, required: true },
  bgMiddle: { type: String, required: true },
  bgRight: { type: String, required: true },
  heroImage: { type: String, required: true },
  thumbnails: [
    {
      image: { type: String, required: true },
      label: String,
      targetSlide: { type: String, required: true }
    }
  ],
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('HeroSlide', HeroSlideSchema);