const express=require("express");
const router=express.Router();
const deleteController=require("../controller/user.controller.js")
const authCheck=require("../middleware/jwt");

router.delete("/:id",authCheck.verifyToken,  deleteController.deleteUser);


module.exports=router;