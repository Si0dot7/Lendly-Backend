const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    imageUrl: String,
    publicId: String,
    productId:String
},{timestamps:true})

module.exports = mongoose.model('Image',imageSchema)