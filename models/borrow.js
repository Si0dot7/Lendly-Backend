const mongoose = require("mongoose");

const borrowSchema = mongoose.Schema(
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
    },

  },{ timestamps: true }
);

module.exports = mongoose.model('borrow',borrowSchema)
