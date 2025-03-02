const express = require('express')
const {read,list,create,update,remove} = require('../controller/product')
const router = express.Router()
const {auth} = require('../middleware/auth')
const {upload} = require('../config/cloudinaryConfig')
const Image = require('../models/image')
const multer = require('multer');
const uploaded = multer();

router.get('/product',list)

router.get('/product/:id',read)

router.post('/product',uploaded.none(),create)

router.put('/product/:id',update)

router.delete('/product/:id',remove)

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
      console.log("File object complete:", JSON.stringify(req.file, null, 2));
      
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // ตรวจสอบว่า secure_url และ public_id มีอยู่จริง
      console.log("URL:", req.file.path);
      console.log("Public ID:", req.file.filename);
      var data = {
        imageUrl: req.file.path,
        publicId: req.file.filename
      };
      const createImage = await Image(data ).save()
      console.log('show',createImage);
      
      res.json({
        imageUrl: req.file.path,      
        publicId: req.file.filename,   
      });
    } 
    catch (err) {
      console.error("Detailed error:", err);
      res.status(500).json({ error: 'อัปโหลดรูปไม่สำเร็จ', details: err.message });
    }
  });

  
router.get('/image',async(req,res)=>{
    try {
        const listImage = await Image.find({}).exec();
        console.log(listImage);
        res.json(listImage)
        
    } catch (error) {
        console.log(error);
        
    }
  })

module.exports = router