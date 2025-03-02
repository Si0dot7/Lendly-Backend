// cloudinaryConfig.js

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require("dotenv").config();
// ตั้งค่า Cloudinary ด้วย ENV
// test-cloudinary.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'doq7gib34',
    api_key: '666723427181344',
    api_secret: '8v5L82SaEEPAp7v6RRtbmnSm-DU',
  });
  
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'assets_folder',
      allowed_formats: ['jpg', 'png', 'jpeg'],
      transformation: [{ width: 500, height: 500, crop: 'limit' }]
    }
  });
  
  const upload = multer({ storage });

// async function testUpload() {
//   try {
//     // ทดสอบอัปโหลดไฟล์ค่าเริ่มต้น
//     const result = await cloudinary.uploader.upload('https://lendly-backend.onrender.com/api/uploads/file-1740891917889-281666612.jpeg');
//     console.log('Success:', result);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// testUpload();



module.exports = { cloudinary, upload };
