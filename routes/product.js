const express = require('express')
const {read,list,create,update,remove,borrow,updateborrow} = require('../controller/product')
const router = express.Router()
const {auth} = require('../middleware/auth')
const {upload} = require('../config/cloudinaryConfig')
const Image = require('../models/image')
const multer = require('multer');
const uploaded = multer();

router.get('/product',auth,list)
router.get('/product/borrow',auth,borrow)
router.put('/product/updateborrow',auth,updateborrow)

router.get('/product/:id',auth,read)

// router.post('/product',auth,uploaded.none(),create)
router.post('/product',auth,create)

router.put('/product/:id',auth,update)

router.delete('/product/:id',auth,remove)

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
    //   console.log("File object complete:", JSON.stringify(req.file, null, 2));
      
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // ตรวจสอบว่า secure_url และ public_id มีอยู่จริง
    //   console.log("URL:", req.file.path);
    //   console.log("Public ID:", req.file.filename);
      console.log(req.file);
      
      
      var data = {
        imageUrl: req.file.path,
        publicId: req.file.filename,
        
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
router.get('/image/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const listImage = await Image.findOne({ _id: id }).exec();
        console.log(listImage);
        res.json(listImage)
        
    } catch (error) {
        console.log(error);
        
    }
  })
   
  router.get('/ping',(req,res)=>{
    res.status(200).send('server running')
  })

module.exports = router