const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now()+'-'+Math.round(Math.random()*1E9)
        const safeFileName = file.originalname.replace(/\s/g, '_');
        cb(null, 'file-' + uniqueSuffix + path.extname(safeFileName));
    }
})

exports.upload = multer({storage: storage}).single('file')