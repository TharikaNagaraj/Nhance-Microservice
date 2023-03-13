const express = require("express")
const router = express.Router()
const imgController = require("../app/controllers/imgController")
const multer = require("multer")

const multerStorage = multer.diskStorage({
    destination : (req,file,cb) => 
    {
        cb(null,'./uploads')
    },
    filename : (req,file,cb) => 
    {
        const ext = file.mimetype.split("/")[1]
        cb(null,`${file.fieldname}-${file.originalname}-${Date.now()}.${ext}`)
    }
})
const upload = multer({
    storage : multerStorage
})

router.post("/api/app3/image-upload",upload.single("placeholder"),imgController.create)
router.get("/api/app3/image/:name",imgController.showOne)   
router.get("/api/app3/image-all",imgController.showAll)
router.delete("/api/app3/image-delete/:id",imgController.delete)




module.exports = router