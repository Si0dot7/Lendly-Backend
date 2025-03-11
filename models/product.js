const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type:String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image:{
      type:String,
    },
    mainLocation:{
      type:String,
    },
    subLocation:{
      type:String,
    },

  },{ timestamps: true }
);

module.exports = mongoose.model('product',productSchema)
