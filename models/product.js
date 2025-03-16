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
    email:{
      type:String,
    },
    borrowEmail:{
      type:String,
      default:null,
    },
    status:{
      type:String,
      enum: ["available", "borrowed"],
    },
    favorite:{
      type:Boolean,
      default:false,
    },
    favoriteEmail:{
      type:String,
      default:null,
    },
  },{ timestamps: true }
);

module.exports = mongoose.model('product',productSchema)
