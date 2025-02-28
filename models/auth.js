const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
}, {timestamps: true})

module.exports = mongoose.model('users',authSchema)