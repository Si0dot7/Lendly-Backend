const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,'./uploads')
    },
    filename: function(req,file,cd){
        const uniqueSuffix = Date.now()+'-'+Math.round(Math.random()*1E9)
        cd(null,'file-'+uniqueSuffix+file.originalname)
    }
})

exports.upload = multer({storage: storage}).single('file')