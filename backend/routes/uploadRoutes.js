import path from "path"
import express from "express"
import multer from "multer"

const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/')
    },
    filename(req, file, cb){
        cb(null, `${file.filename}-${Date.now()} ${path.extname(file.originalname)}`)
    }
})


const checkFileType = (isImage = true, file, cb)=>{
    const filetypes = isImage ? /jpg|jpeg|png/ : /jpg|jpeg|png|pdf/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
    
    if(extname && mimetype){
        return cb(null, true)
    }else{
        isImage ? cb('Images only!') : cb('Images and PDF only')
    }
}


const imageUpload = multer({
    storage,
    fileFilter: function(req, file, cb){
        checkFileType(file, cb)
    }
})

const documentsUpload = multer({
    storage,
    fileFilter: function(req, file, cb){
        checkFileType(false, file, cb)
    }
})

router.post('/', imageUpload.single('image'), (req, res)=>{
    res.send(`/${req.file.path}`)
})

router.post('/', documentsUpload.single('document'), (req, res)=>{
    res.send(`/${req.file.path}`)
})

export default router