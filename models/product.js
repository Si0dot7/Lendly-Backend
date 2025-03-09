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
    mainLocation:{
      type:String,
    },
    subLocation:{
      type:String,
    },
    productId:{
      type:Number,
      default:()=>Math.floor(Date.now()/1000)
    }
    
    

  },{ timestamps: true }
);

module.exports = mongoose.model('product',productSchema)
