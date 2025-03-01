const express = require('express')
const {read,list,create,update,remove} = require('../controller/product')
const router = express.Router()
const {auth} = require('../middleware/auth')
const {upload} = require('../middleware/upload')

router.get('/product',list)

router.get('/product/:id',read)

router.post('/product',upload,create)

router.put('/product/:id',upload,update)

router.delete('/product/:id',remove)

module.exports = router