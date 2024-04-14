const express=require("express");

const router=express.Router();

const {createGig}=require("../controller/gig.controller")
const {getGig}=require("../controller/gig.controller")
const {deleteGig}=require("../controller/gig.controller")
const {getGigs}=require("../controller/gig.controller")



router.post("/gig",verifyToken,createGig);
router.get("/gig",verifyToken,getGig);
router.get("/gig",verifyToken,getGigs);
router.delete("/:id",verifyToken,deleteGig);
module.exports=router;

