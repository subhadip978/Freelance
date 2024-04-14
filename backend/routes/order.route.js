const exrpess=require("express");
const router=express.Router();
const {createOrder}=require("../controllers/order.controller");
const {getOrders}=require("../controllers/order.controller");

router.post("/:gigId",verifyToken,createOrder)

router.get("/test",verifyToken,getOrders)


module.exports=router;