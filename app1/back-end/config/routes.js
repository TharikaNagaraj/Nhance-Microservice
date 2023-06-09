const express = require("express")
const router = express.Router()
const userController = require("../app/controllers/userController")
const userAuthenticate = require("../app/middleware/userAuthenticate")


router.post("/api/app1/register",userController.register)
router.post("/api/app1/login",userController.login)
router.get("/api/app1/user",userAuthenticate,userController.show)
router.put("/api/app1/add-user-info",userAuthenticate,userController.update)
router.get("/api/app1/get-user-info",userAuthenticate,userController.display)
router.get("/api/app1/showAll",userController.showAll)
router.delete("/api/app1/delete-user/:id",userController.destroy)

router.get("/api/app1/search-email/:email",userController.search)
router.get("/api/app1/email-search/:email",userController.searchUser)

router.post("/api/app1/user-create",userController.create)
router.get("/api/app1/users-all",userController.fetchAll)



module.exports = router