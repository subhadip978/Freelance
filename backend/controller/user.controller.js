const User = require("../models/user.model"); 
const jwt = require("jsonwebtoken");

exports.deleteUser=async(req,res)=>{
	console.log("i am in user.controller")
	try{
	const user=await User.findById(req.params.id);
	console.log("i am in user.controller");
	if(req.userId!==user._id.toString()){
		return res.status(403).send("you can delete only your account")
	}
	
		await User.findByIdAndDelete(req.params.id);
		
		 res.status(200).send("DELETED");
}catch(err){
	console.log(err);
}

};
