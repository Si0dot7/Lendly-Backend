const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type:String
    },
    description: {
      type: String,
    },
    file: {
      type: String,
    },
    genre: {
      type: String,
    },
    lenderName: {
      type: String,
    },
    
    status: {
      type: String,
    },
    price: {
      type: Number,
    },
    
    

  },{ timestamps: true }
);

module.exports = mongoose.model('product',productSchema)
