import mongoose from "mongoose";

// 1. Schema for the individual Food Items (The "Children")
const sliderItemSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  }, 

  description: { 
    type: String, 
    required: true 
  }, 

  thumbnailImage: { 
    type: String, 
    required: true 
  }, 


  mainImage: { 
    type: String, 
    required: true 
  }, 


  themeColor: { 
    type: String, 
    default: "#004d40" 
  },
  

  backgroundImage: {
    type: String
  }
});

// 2. Main Schema (The Container)
const sliderSchema = new mongoose.Schema(
  {
    categoryName: { 
        type: String, 
        required: true 
    },

    items: [sliderItemSchema], 

    defaultActiveIndex: {
        type: Number,
        default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Slider", sliderSchema);